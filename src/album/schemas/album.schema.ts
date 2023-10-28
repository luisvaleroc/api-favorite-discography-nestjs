import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, Document } from 'mongoose';

export type CatDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop()
  name: string;

  @Prop()
  url: number;

  @Prop()
  autor: string;
}
export const AlbumSchema = SchemaFactory.createForClass(Album);
export type AlbumDocument = Album & Document;
export type AlbumModel = Model<Album>;