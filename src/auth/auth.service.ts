import { ConflictException, Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signupDto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor ( private readonly prismaService: PrismaService ){
        
    }
   async signup(signupDto: SignupDto){
    const {email, username,password} = signupDto
    // Verification si l'utilisateur exist déjà
   const user = await this.prismaService.user.findUnique({where: {email}})
    if(user) throw new ConflictException("User already exist")
    //hashe le mot de pass
    const hash = await bcrypt.hash(password,10)
    //Enregister l'utilisateur dans la base de donnée
    await this.prismaService.user.create({
        data:{email,username ,password:hash}
    })
    return {data: "User succes"}
        // throw new Error ('Method not implemented.')
    }
}
