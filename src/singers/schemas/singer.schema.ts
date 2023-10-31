import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Model } from 'mongoose';
import { ISinger } from "../interface/singer.interface";
export type SingerDocument = HydratedDocument<Singer>;
@Schema()
export class Singer implements ISinger{
  @Prop()
  name: string;
  // Otras propiedades del Cantante, si las hubiera
}
export const SingerSchema = SchemaFactory.createForClass(Singer);
export type SingerModal = Model<Singer>
