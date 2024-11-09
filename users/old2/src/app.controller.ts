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
    console.log(data);
    // return data;
    return { name:'name 1211', email: 'asdddd@motext.ru'}
  }
}
