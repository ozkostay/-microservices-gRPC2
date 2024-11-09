import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_CLIENT',
        transport: Transport.GRPC,
        options: {
          package: 'users',
          protoPath: join(__dirname, 'protos/users.proto'),
          url: 'localhost:50051',
        },
      },
    ]),


    // ClientsModule.register([
    //   {
    //     name: 'USERS_CLIENT',
    //     transport: Transport.TCP,
    //     options: {
    //       host: 'localhost',
    //       port: 13101,
    //     },
    //   },
    // ]),

    // ClientsModule.register([
    //   {
    //     name: 'USERS_CLIENT',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://localhost:5672'],
    //       queue: 'konst_queue',
    //       queueOptions: {
    //         durable: false
    //       },
    //     },
    //   },
    // ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
