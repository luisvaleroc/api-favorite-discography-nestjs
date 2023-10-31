import { Inject, Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { AlbumRepository } from './repository/album.repository';
import { Album } from './schemas/album.schema';
import { SingersService } from 'src/singers/singers.service';
import { CreateInternalAlbumDto } from './dto/create-internal-album.dto';



@Injectable()
export class AlbumService {
  constructor(private albumRepository: AlbumRepository, private singerRepository: SingersService) {}

  async create(createCatDto: CreateAlbumDto): Promise<Album> {
    const singerFind = await this.singerRepository.findById(createCatDto.singer)
    const {name, imageUrl} = createCatDto
    const interNalDto: CreateInternalAlbumDto= {singer: singerFind, name, imageUrl, songs:[]}
    return await this.albumRepository.create(interNalDto)
  }

  findAll() {
    return `This action returns all album`;
  }

  async findById(id: string) {
    const albumFind = await this.albumRepository.findById(id)
    return albumFind
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto) {
    const album = await this.findById(id)
    console.log(album)
    return album
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
