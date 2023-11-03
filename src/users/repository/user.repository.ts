import { User } from "../schemas/user.shema"
import { Model } from "mongoose"
import { InjectModel } from "@nestjs/mongoose"
import { CreateUserDto } from "../dto/create-user.dto"
import { IsUser } from "../interfaces/user.intarface"

export class UserRepository {
    constructor(@InjectModel(User.name) private UserModel: Model<User>){

    }
    async create(createUserDto: CreateUserDto): Promise<User> {
        const createUser = new this.UserModel(createUserDto)
        return createUser.save()
    }

    async findById(name: string): Promise<any>{
        return (await this.UserModel.findOne({"name": name}))
    }
}