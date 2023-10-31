import { InjectModel } from "@nestjs/mongoose";
import { Singer } from "../schemas/singer.schema";
import { Model } from "mongoose";
import { CreateSingerDto } from "../dto/create-singer.dto";

export class SingerRepository{

    constructor(@InjectModel(Singer.name) private SingerModel: Model<Singer>){
    
    }
    async create(createSingerDto: CreateSingerDto): Promise<Singer> {
      const createdSinger = new this.SingerModel(createSingerDto)
      return createdSinger.save()
    }

    async findById(id: string): Promise<Singer>{
        return await this.SingerModel.findById(id)
    }
}