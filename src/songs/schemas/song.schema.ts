import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { ISong } from "../interface/song.interface";
export type SongDocument = HydratedDocument<Song>;
@Schema()
export class Song implements ISong{
  @Prop()
  name: string

  @Prop()
  duration: string

  @Prop()
  gender: string

  @Prop()
  album: string

}
export const SongSchema = SchemaFactory.createForClass(Song);
export type SongModel = Model<Song>
