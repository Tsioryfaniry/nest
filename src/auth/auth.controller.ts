import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupDto } from './dto/signupDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService){}
    @Post("signup")
    signup(@Body() signupdto: SignupDto){
        return this.authService.signup(signupdto)
    }
}
