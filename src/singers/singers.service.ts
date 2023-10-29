import { Injectable } from '@nestjs/common';
import { CreateSingerDto } from './dto/create-singer.dto';
import { UpdateSingerDto } from './dto/update-singer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Singer } from './schemas/singer.schema';

@Injectable()
export class SingersService {
  constructor(@InjectModel(Singer.name) private SingerModel: Model<Singer>){
    
  }
  async create(createSingerDto: CreateSingerDto): Promise<Singer> {
    const createdSinger = new this.SingerModel(createSingerDto);
    return createdSinger.save();
  }

  findAll() {
    return this.SingerModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} singer`;
  }

  update(id: number, updateSingerDto: UpdateSingerDto) {
    return `This action updates a #${id} singer`;
  }

  remove(id: number) {
    return `This action removes a #${id} singer`;
  }
}
