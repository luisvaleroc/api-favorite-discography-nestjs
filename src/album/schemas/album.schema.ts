import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, Document } from 'mongoose';
import { Singer } from 'src/singers/schemas/singer.schema';
import { Song } from 'src/songs/schemas/song.schema';

export type CatDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop({type: Singer})
  singer: Singer;
  
  @Prop({type: []})
  songs: Song[]
}
export const AlbumSchema = SchemaFactory.createForClass(Album);
export type AlbumDocument = Album & Document;
export type AlbumModel = Model<Album>;