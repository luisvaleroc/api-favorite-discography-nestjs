import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumSchema } from './schemas/album.schema';
import { Album } from './entities/album.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }])],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
