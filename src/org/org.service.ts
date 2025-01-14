import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Org } from './org.schema';
import { CreateOrgDto } from './dto/createOrg.dto';

@Injectable()
export class OrgsService {
  constructor(@InjectModel(Org.name) private orgModel: Model<Org>) {}

  async create(org: CreateOrgDto): Promise<Org> {
    const newOrg = new this.orgModel(org);
    return newOrg.save();
  }

  async findAll(): Promise<Org[]> {
    return this.orgModel.find().exec();
  }

  async findById(id: string): Promise<Org> {
    return this.orgModel.findById(id).exec();
  }

  async update(id: string, org: Org): Promise<Org> {
    return this.orgModel.findByIdAndUpdate(id, org, { new: true }).exec();
  }

  async delete(id: string): Promise<Org> {
    return this.orgModel.findByIdAndDelete(id).exec();
  }
}
