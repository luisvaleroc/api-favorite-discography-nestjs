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

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
