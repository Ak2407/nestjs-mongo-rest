import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { OrgModule } from './org/org.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    OrgModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
