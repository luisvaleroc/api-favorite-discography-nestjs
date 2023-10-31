import { ISinger } from "src/singers/interface/singer.interface";
import { ISong } from "src/songs/interface/song.interface";
import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateSongDto } from "src/songs/dto/create-song.dto";



export class CreateInternalAlbumDto {

    @IsString()
    name: string
    
    @IsString()
    imageUrl: string
    
    singer: ISinger
    
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateSongDto)
    songs: ISong[]
}