import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OrgsService } from './org.service';
import { Org } from './org.schema';
import { CreateOrgDto } from './dto/createOrg.dto';

@Controller('orgs')
export class OrgsController {
  constructor(private readonly orgsService: OrgsService) {}

  // Creating a new Org
  @Post()
  async create(@Body() org: CreateOrgDto): Promise<CreateOrgDto> {
    return this.orgsService.create(org);
  }

  // Finding all Orgs
  @Get()
  async findAll(): Promise<Org[]> {
    return this.orgsService.findAll();
  }

  // Finding by ID
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Org> {
    const findOrg = await this.orgsService.findById(id);
    if (!findOrg) {
      throw new HttpException('Organization not found', 404);
    }
    return findOrg;
  }

  // Updating
  @Patch(':id')
  async update(@Param('id') id: string, @Body() org: Org): Promise<Org> {
    const findOrg = await this.orgsService.update(id, org);
    if (!findOrg) {
      throw new HttpException('Organization not found', 404);
    }
    return findOrg;
  }

  // Deleting
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Org> {
    const findOrg = await this.orgsService.delete(id);
    if (!findOrg) {
      throw new HttpException('Organization not found', 404);
    }
    return findOrg;
  }
}
