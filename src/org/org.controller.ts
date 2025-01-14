import {
  Body,
  Controller,
  Delete,
  Get,
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
    return this.orgsService.findById(id);
  }

  // Updating
  @Patch(':id')
  async update(@Param('id') id: string, @Body() org: Org): Promise<Org> {
    return this.orgsService.update(id, org);
  }

  // Deleting
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Org> {
    return this.orgsService.delete(id);
  }
}
