import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private UsersService: UsersService){

    }

    async signIn(userName: string,  pass: String): Promise<any>{
        const user = await this.UsersService.findOne(userName)
        if(user?.password !== pass ){
            throw new UnauthorizedException()
        }
        const { password, ...result } =  user.toObject();;

        return result;
    }
}
