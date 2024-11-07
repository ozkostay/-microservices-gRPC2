import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  findAll(){
    const books = [{ book: 'Book-1'}, { book: 'Book-2'}];
    return books;
  } 
}
