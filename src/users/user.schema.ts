import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Org } from 'src/org/org.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  age: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Org', required: true })
  org: Org;
}

export const UserSchema = SchemaFactory.createForClass(User);
