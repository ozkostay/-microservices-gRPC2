import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('BOOKS_CLIENT') private booksClient: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  findAll() {
    const users = [{ user: 'User1' }, { user: 'User2' }];
    return users;
  }

  bridgeToBooks() {
    const res$ = this.booksClient.send('books.findAll', {
      ddd: 'USERS bridgeToBooks from USERS',
    });
    return lastValueFrom(res$);
  }
}
