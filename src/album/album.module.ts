import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumSchema, Album } from './schemas/album.schema';
import { AlbumRepository } from './repository/album.repository';
import { SingersModule } from 'src/singers/singers.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]), SingersModule],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumRepository],
  exports:[AlbumRepository]
})
export class AlbumModule {}
