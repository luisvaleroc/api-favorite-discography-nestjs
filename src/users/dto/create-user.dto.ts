import { IsString } from "class-validator";
import { IsUser } from "../interfaces/user.intarface";
export class CreateUserDto implements IsUser {
    @IsString({message: "El nombre debe ser un string"})
    name: string
    password: string
    email: string
}


