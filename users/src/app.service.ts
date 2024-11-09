import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private booksService: any;

  constructor(
    // private readonly booksService: BooksService
    @Inject('BOOKS_CLIENT') private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.booksService = this.client.getService('BooksService');
  }

  async getUserBook(data) {
    const book: any = await lastValueFrom(this.booksService.GetBook(data));
    console.log('users service', book.name);
    return book.name;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
