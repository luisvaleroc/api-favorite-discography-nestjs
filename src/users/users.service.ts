import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repository';
import { IsUser } from './interfaces/user.intarface';

@Injectable()
export class UsersService {

  constructor(private userRepository: UserRepository){

  }

  async create(createUserDto: CreateUserDto): Promise<IsUser> {
    return this.userRepository.create(createUserDto)
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(name: string) : Promise<any>{
    return await this.userRepository.findById(name)
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
