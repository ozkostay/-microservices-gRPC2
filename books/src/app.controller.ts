import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @GrpcMethod('BooksService', 'GetBook')
  findOne(data: any) {
    console.log(data);
    return { name: 'books', ...data };
  }
}
