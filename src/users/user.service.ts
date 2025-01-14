import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { Org } from 'src/org/org.schema';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Org.name) private orgModel: Model<Org>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    // Creating new user
    const newUser = new this.userModel(user);
    await newUser.save();

    // Adding the new user to the org
    const org = await this.orgModel.findById(user.org);
    if (org) {
      org.users.push(newUser._id.toString());
      await org.save();
    }

    return newUser;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async findByOrg(org: string): Promise<User[]> {
    // Make it so that case doesn't matter
    org = org.toLowerCase();
    const foundOrg = await this.orgModel.find({ name: org }).exec();
    return this.userModel.find({ org: foundOrg[0]._id }).exec();
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
