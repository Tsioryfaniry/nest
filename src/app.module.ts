import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config'
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),TasksModule, AuthModule, PrismaModule, MailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
