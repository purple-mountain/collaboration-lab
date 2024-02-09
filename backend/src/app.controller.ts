import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }

  @Get(':name')
  getHello(@Param('name') name: string): string {
    return this.appService.getHello(name);
  }
}
