import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGoodbye(): string {
    return 'Goodbye World!';
  }
  getHello(name: string): string {
    return 'Goodbye ' + name;
  }
}
