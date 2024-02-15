import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { Request } from 'express';

@Injectable()
export class TodoService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTodoDto: Prisma.TaskCreateInput) {
    return this.databaseService.task.create({ data: createTodoDto });
  }

  async findAll(request: Request) {
    const authorId = request.get('Author-Id');
    console.log(authorId);
    return this.databaseService.task.findMany({
      where: { authorId: authorId },
    });
  }

  async findOne(id: number) {
    return this.databaseService.task.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTodoDto: Prisma.TaskUpdateInput) {
    return this.databaseService.task.update({
      where: {
        id,
      },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.task.delete({
      where: { id },
    });
  }
}
