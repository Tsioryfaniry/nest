import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get("/user")
    getTasks(){
        return 'test'
    }
}
