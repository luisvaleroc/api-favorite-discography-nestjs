import { Injectable } from '@nestjs/common';
import { CreateSingerDto } from './dto/create-singer.dto';
import { UpdateSingerDto } from './dto/update-singer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Singer } from './schemas/singer.schema';
import { SingerRepository } from './repository/singer.repository';

@Injectable()
export class SingersService {
  constructor(private singerRepository: SingerRepository) {

  }
  async create(createSingerDto: CreateSingerDto): Promise<Singer> {

    return await this.singerRepository.create(createSingerDto)
  }

  async findById(id: string) {
    return await this.singerRepository.findById(id)
  }
  findAll() { }
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
