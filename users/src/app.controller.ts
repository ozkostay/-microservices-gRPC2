import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { findOneDto } from './dto/create.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    
    return this.appService.getHello();
  }

  @GrpcMethod('UsersService', 'GetUser')
  findOne(data: findOneDto) {
    console.log('GetUser', data);

    return { name: 'users', ...data};
  }

  @GrpcMethod('UsersService', 'GetUserBook')
  async userBook(data: findOneDto) {
    console.log('GetUserBook', data);
    const bookTemp = await this.appService.getUserBook(data);

    return { name: 'usersBook', ...data, book: bookTemp};
  }
}
