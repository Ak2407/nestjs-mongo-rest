import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { OrgModule } from 'src/org/org.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    OrgModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
