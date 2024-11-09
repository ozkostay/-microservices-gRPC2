import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientGrpc } from '@nestjs/microservices';

@Controller('books')
export class BooksController {
  private booksService: any;

  constructor(
    // private readonly booksService: BooksService
    @Inject('BOOKS_CLIENT') private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.booksService = this.client.getService('BooksService');
  }

  @Get()
  findAll() {
    // return this.booksService.findAll();
    console.log('API book-api controller');
    return this.booksService.GetBook({ email: 'ozkostay@mail.com' }); 
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.booksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(+id, updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}
