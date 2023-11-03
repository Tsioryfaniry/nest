import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signupDto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import { MailerService } from 'src/mailer/mailer.service';
import { SigninDto } from './dto/signinDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()   
export class AuthService {
    configService: any;
    constructor ( private readonly prismaService: PrismaService, private readonly emailService: MailerService,private readonly JwtService: JwtService ){}
   async signup(signupDto: SignupDto){
    const {email,username,name ,password} = signupDto
    // Verification si l'utilisateur exist déjà
   const user = await this.prismaService.user.findUnique({where: {email}})
    if(user) throw new ConflictException("User already exist")
    //hashe le mot de pass
    const hash = await bcrypt.hash(password,10)
    //Enregister l'utilisateur dans la base de donnée
    await this.prismaService.user.create({data:{email,username, name,password:hash}})
    //Envoye email confirmation
    await this.emailService.sendSignupConfirmation(email)

    return {data: "User successfully create"}
}

async signin(signinDto: SigninDto){
    const {email, password} = signinDto
    // throw new Error('Method not implemented')
    //Verifier si l'utilisateur existe déjà 
    const user = await this.prismaService.user.findUnique({where: {email}})
    if(!user) throw new NotFoundException("User not fond")
    //Compare le mot de pass
    const match= await bcrypt.compare(password, user.password)
    if(!match) throw new UnauthorizedException("Password does not match")
    const payload={
        sub : user.userId,
        email: user.email
    }
    const token = this.JwtService.sign(payload, {expiresIn: "h2", secret: this.configService.get("SECRET_KEY")})
}
}
