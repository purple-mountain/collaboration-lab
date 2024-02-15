import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Prisma } from '@prisma/client';
import { ZodValidationPipe } from 'src/zod-validation.pipe';
import { todoSchema } from './dto/todo.dto';
import { Request } from 'express';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(todoSchema))
    createTodoDto: Prisma.TaskCreateInput,
  ) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.todoService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(todoSchema))
    updateTodoDto: Prisma.TaskUpdateInput,
  ) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.remove(id);
  }
}
