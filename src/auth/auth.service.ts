import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IsUser } from 'src/users/interfaces/user.intarface';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private UsersService: UsersService, private jwtService: JwtService){

    }

    async signIn(userName: string,  pass: String): Promise<any>{
        const user: IsUser = await this.UsersService.findOne(userName)
        if(user?.password !== pass ){
            throw new UnauthorizedException()
        }
        const payload = { sub: user.email, username: user.name };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
        const { password, ...result } =  user

        return result;
    }
}
