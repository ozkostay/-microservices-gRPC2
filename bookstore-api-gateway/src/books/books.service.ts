import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private booksClient: ClientProxy) {}

  findAll() {
    const res$ = this.booksClient.send('books.findAll', {
      ddd: 'BOOKS findAll',
    });
    return lastValueFrom(res$);
  }
}
