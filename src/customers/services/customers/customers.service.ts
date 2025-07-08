import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      id: 1,
      email: 'danny@gmail.com',
      createdAt: new Date(),
    };
  }
}
