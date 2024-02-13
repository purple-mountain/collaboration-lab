import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class TodoService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTodoDto: Prisma.TaskCreateInput) {
    return this.databaseService.Post.create({ data: createTodoDto });
  }

  async findAll() {
    return this.databaseService.Post.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.Post.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTodoDto: Prisma.TaskUpdateInput) {
    return this.databaseService.Post.update({
      where: {
        id,
      },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.Post.delete({
      where: { id },
    });
  }
}
