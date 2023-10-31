import { IsMongoId } from "class-validator";
import { ISong } from "../interface/song.interface";

export class CreateSongDto implements ISong {
    name: string
    duration: string
    gender: string
    @IsMongoId()
    album: string
}
