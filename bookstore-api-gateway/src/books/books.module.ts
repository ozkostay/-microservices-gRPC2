import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOKS_CLIENT',
        transport: Transport.GRPC,
        options: {
          package: 'books',
          protoPath: join(__dirname, 'protos/books.proto'),
          url: 'localhost:50052',
        },
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
