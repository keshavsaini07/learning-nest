import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import entities from './typeorm';
import { PassportModule } from '@nestjs/passport';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345@Keshav',
      database: 'tutorial_db',
      entities: entities,
      synchronize: true,
    }),
    AuthModule,
    PassportModule.register({
      session: true,
    }),
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
