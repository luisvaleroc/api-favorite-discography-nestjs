import { Injectable } from '@nestjs/common';
import { CreateSingerDto } from './dto/create-singer.dto';
import { UpdateSingerDto } from './dto/update-singer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SingerRepository } from './repository/singer.repository';
import { ISinger } from './interface/singer.interface';

@Injectable()
export class SingersService {
  constructor(private singerRepository: SingerRepository) {

  }
  async create(createSingerDto: CreateSingerDto): Promise<ISinger> {

    return await this.singerRepository.create(createSingerDto)
  }

  async findById(id: string) {
    return await this.singerRepository.findById(id)
  }
  async findAll() {
    return await this.singerRepository.findAll();
   }

  update(id: number, updateSingerDto: UpdateSingerDto) {
    return `This action updates a #${id} singer`;
  }

  async remove(id: string) {
    return await this.singerRepository.deleteOne(id)
  }
}
