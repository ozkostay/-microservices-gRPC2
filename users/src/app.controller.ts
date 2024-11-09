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
    
    return { name: 'users', ...data};
    // return { name:'name 1211', email: 'asdddd@motext.ru'}
  }

  @GrpcMethod('UsersService', 'GetUserBook')
  async userBook(data: findOneDto) {
    console.log('GetUserBook', data);
    const bookTemp = await this.appService.getUserBook(data);
    return { name: 'usersBook', ...data, book: bookTemp};
    
  }
}
