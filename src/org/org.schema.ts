import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrgDocument = HydratedDocument<Org>;

@Schema()
export class Org {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;
}

export const OrgSchema = SchemaFactory.createForClass(Org);
