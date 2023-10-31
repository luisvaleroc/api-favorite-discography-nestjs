import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { SongRepository } from './repository/song.repository';
import { Song } from './schemas/song.schema';
import { AlbumRepository } from 'src/album/repository/album.repository';

@Injectable()
export class SongsService {
  constructor(private songRepository: SongRepository, private albumRepository: AlbumRepository){

  }
  async create(createSongDto: CreateSongDto): Promise<Song> {
    const song = await this.songRepository.create(createSongDto)
    console.log(song)
    const album = await this.albumRepository.update(song.album,song)
   return song
  }

  findAll() {
    return `This action returns all songs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
