import {
  Controller,
  Post,
  Body,
  Put,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/create-todo';
import { UpdateTodoDto } from './dtos/update-todo.dto';

@Controller('todo')
export class TodoController {
  //defino los servicios a utilizar
  constructor(private todoService: TodoService) {}

  @Post()
  async create(@Body() createTodo: CreateTodoDto) {
    return this.todoService.create(createTodo);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() UpdateTodo: UpdateTodoDto) {
    return this.todoService.update(id, UpdateTodo);
  }

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
