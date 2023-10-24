
import { Controller, Get, Req, Param, HttpCode, HostParam, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Request } from 'express';
import { CreateCatDto } from 'src/cateTodo/create-cat-dto';

@Controller("tasks")
export class TasksController {
  constructor(private catsService: TasksService) {}
    // @Get()
    // @HttpCode(304)
    // test(@HostParam() account: string):string{
    //   return account
    // }

    // @Get("/service")
    // getAllService(){

    //     return this.catsService.getAllTask()
    // }
    // @Get("/get")
    // findAll(@Req() request:Request):string{
    //   const userId = request.body
    //   console.log(userId);
      
    //   return `User Id : ${userId}`
    // }
    // @Get(':id')
    // @HttpCode(200)  
    // findOne(@Param('id') id:string ): string{
    //   return `This action return id : ${id}`
    // }
    // @Get("/async")
    // async findAllAsync():Promise<any[]>{
    //   return ['test',1,2]

    // }
    // @Post()
    // async create(@Body() createCatDto:CreateCatDto){
    //   const tasks = createCatDto
      
    //   return `this action creact : ${tasks}`
    // }
}