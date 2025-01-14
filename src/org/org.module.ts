import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Org, OrgSchema } from './org.schema';
import { OrgsController } from './org.controller';
import { OrgsService } from './org.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Org.name, schema: OrgSchema }])],
  controllers: [OrgsController],
  providers: [OrgsService],
})
export class OrgModule {}
