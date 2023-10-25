
import { Controller, Get, Req, Param, HttpCode, HostParam, Post, Body, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Request } from 'express';
import { CreateCatDto } from 'src/cateTodo/create-cat-dto';
import { Response } from 'express'

@Controller("tasks")
export class TasksController {
  constructor(private catsService: TasksService) {}
    @Get()
    @HttpCode(304)
    test():string{
      return 'test'
    }

    @Get("/service")
    getAllService(){

        return this.catsService.getAllTask()
    }
//     @Get(':id')
//       async findOne(@Param('id', ParseIntPipe) id: number) {
//       return this.catsService.findOne(id); 
// }
@Get(':id')
async findOne(
  @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
  id: number,
) {
  return this.catsService.findOne(id);
}
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