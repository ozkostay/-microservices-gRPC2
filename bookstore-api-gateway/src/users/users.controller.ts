import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientGrpc } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  private usersService: any;

  constructor(
    // private readonly usersService: UsersService,
    @Inject('USERS_CLIENT') private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.usersService = this.client.getService('UsersService');
  }
  
  @Get()
  findAll() {
    console.log('API user-api controller');
    return this.usersService.GetUser({ email: 'ozkostay@mail.com' }); 
  }

  // @Get('bridge')
  // bridgeToBooks() {
  //   return this.usersService.bridgeToBooks();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
