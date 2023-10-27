import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService extends PrismaClient {
    // create(arg0: { data: { email: string ; username: string; password: string ; }; }) {
    //     throw new Error('Method not implemented.');
    // }
    constructor(configService : ConfigService){
        super({
            datasources:{
                db:{
                    url: configService.get("DATABASE_URL")
                }
            }
        })
    }
}
