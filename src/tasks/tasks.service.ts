import { Injectable } from '@nestjs/common';
import { Cat } from '../interface/Interface';

@Injectable()
export class TasksService {
  private tasks = ['test']
  getAllTask(){
    return this.tasks
  }
}