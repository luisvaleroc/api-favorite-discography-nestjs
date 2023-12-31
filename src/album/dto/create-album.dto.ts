import { ISinger } from "src/singers/interface/singer.interface";
import { IAlbum } from "../interface/album.interface";
import { ISong } from "src/songs/interface/song.interface";
import { IsArray, IsMongoId, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateSongDto } from "src/songs/dto/create-song.dto";

export class CreateAlbumDto  {
    @IsString()
    name: string
    
    @IsString()
    imageUrl: string
    
    @IsString()
    singer: string
    
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateSongDto)
    songs: ISong[]

}