import { Album } from '../schemas/album.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInternalAlbumDto } from '../dto/create-internal-album.dto';
import { UpdateAlbumDto } from '../dto/update-album.dto';
import { Song } from 'src/songs/schemas/song.schema';

export class AlbumRepository {
    constructor(@InjectModel(Album.name) private AlbumModel: Model<Album>) { }

    async create(createInternalAlbumDto: CreateInternalAlbumDto): Promise<Album> {
        const createAlbum = new this.AlbumModel(createInternalAlbumDto);
        return await createAlbum.save();
    }

    async update(id: string, updateAlbum:Song): Promise<Album> {
        const album = await this.AlbumModel.findById(id)
        album.songs.push(updateAlbum)
        await this.AlbumModel.findByIdAndUpdate(id,album)
        return album;
    }
    async findById(id: string): Promise<Album> {
        const album = await this.AlbumModel.findById(id)
        return album;
    }
}