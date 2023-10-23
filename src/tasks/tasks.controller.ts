
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private catsService: TasksService) {}

    @Get("/service")
    getAllService(){

        return this.catsService.getAllTask()
    }
}