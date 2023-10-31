import { IsString } from "class-validator";
import { ISinger } from "../interface/singer.interface";

export class CreateSingerDto implements  ISinger{
    @IsString({message: "El nombre debe ser un string"})
    name: string
}
