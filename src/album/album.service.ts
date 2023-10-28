import { Inject, Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './schemas/album.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AlbumService {
  constructor(@InjectModel(Album.name) private  AlbumModel: Model<Album>) {}

  async create(createCatDto: CreateAlbumDto): Promise<Album> {
    const createAlbum = new this.AlbumModel(createCatDto);
    return createAlbum.save();
  }

  findAll() {
    return `This action returns all album`;
  }

  findOne(id: number) {
    return `This action returns a #${id} album`;
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
