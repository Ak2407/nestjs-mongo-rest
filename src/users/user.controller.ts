import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Creating a new User
  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  // Finding by Org Name
  @Get()
  async findByOrg(@Query('org') org: string): Promise<User[]> {
    return this.usersService.findByOrg(org);
  }

  // Finding all Users
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // Finding by ID
  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }

  // Updating
  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.usersService.update(id, user);
  }

  // Deleting
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.usersService.delete(id);
  }
}
