import { InjectModel } from "@nestjs/mongoose";
import { Song } from "../schemas/song.schema";
import { Model } from "mongoose";
import { CreateSongDto } from "../dto/create-song.dto";

export class SongRepository{

    constructor(@InjectModel(Song.name) private SongModel: Model<Song>){
    
    }
    async create(createSongDto: CreateSongDto): Promise<Song> {
      const createdSong = new this.SongModel(createSongDto)
      return createdSong.save()
    }

    async findById(id: string): Promise<Song>{
        return await this.SongModel.findById(id)
    }
}