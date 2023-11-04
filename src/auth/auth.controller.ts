import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Authguard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>){
        return this.authService.signIn(signInDto.username, signInDto.password)
    }
    @HttpCode(HttpStatus.OK)
    @UseGuards(Authguard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user
    }
}
