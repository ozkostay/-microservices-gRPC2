import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_CLIENT') private usersClient: ClientProxy) {}

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  async findAll() {
    // const res$ = this.usersClient.send('users.findAll', { ddd: 'findAll' });
    // const fromRabbit = await lastValueFrom(res$);
    // console.log('999', fromRabbit);
    // return fromRabbit;

    const data = { ddd:'111', sss: '444'}
    const res$ = this.usersClient.emit('konst_event', data);
    const toReturn = lastValueFrom(res$);
    console.log('reS', toReturn);
    return await toReturn;
    // return `MOCK This action returns all users`;
  }

  bridgeToBooks() {
    const res$ = this.usersClient.send('users.bridgeToBooks', {
      ddd: 'bridgeToBooks',
    });
    return lastValueFrom(res$);
    

    // return `MOCK This action returns all users`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
