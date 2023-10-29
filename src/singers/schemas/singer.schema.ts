import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Model } from 'mongoose';
export type SingerDocument = HydratedDocument<Singer>;
@Schema()
export class Singer {
  @Prop()
  name: string;
  // Otras propiedades del Cantante, si las hubiera
}
export const SingerSchema = SchemaFactory.createForClass(Singer);
export type SingerModal = Model<Singer>
