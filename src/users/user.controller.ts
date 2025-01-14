import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.schema';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Creating a new User
  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }

  // Finding all Users
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // Finding by Org Name
  @Get()
  async findByOrg(@Query('org') org: string): Promise<User[]> {
    return this.usersService.findByOrg(org);
  }

  // Finding by ID
  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    const findUser = await this.usersService.findById(id);
    if (!findUser) {
      throw new HttpException('User not found', 404);
    }
    return findUser;
  }

  // Updating
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    const findUser = await this.usersService.update(id, user);
    if (!findUser) {
      throw new HttpException('User not found', 404);
    }
    return findUser;
  }

  // Deleting
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    const findUser = await this.usersService.delete(id);
    if (!findUser) {
      throw new HttpException('User not found', 404);
    }
    return findUser;
  }
}
