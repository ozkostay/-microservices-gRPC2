import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('users.findAll')
  findeAll(@Payload() pl: any){
    console.log('Pl', pl);
    return this.appService.findAll();
  }

  @MessagePattern('users.bridgeToBooks')
  bridgeToBooks(@Payload() pl: any){
    console.log('bridgeToBooks Pl', pl);
    return this.appService.bridgeToBooks();
  }

  @MessagePattern('konst_event')
  getNotifications(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getPattern()}`);
    console.log('DATA', data);
    // console.log('getMessage', context.getMessage());
    // console.log('getChannelRef', context.getChannelRef());
    return { ccc: '333'}
  }
  


}
