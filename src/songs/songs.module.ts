import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { SongRepository } from './repository/song.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Song, SongSchema } from './schemas/song.schema';
import { AlbumModule } from 'src/album/album.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]), AlbumModule],
  controllers: [SongsController],
  providers: [SongsService,SongRepository],
})
export class SongsModule {}
