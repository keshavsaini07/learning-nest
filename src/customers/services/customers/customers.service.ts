import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dto/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'danny@gmail.com',
      name: 'Danny Don',
    },
    {
      id: 2,
      email: 'mohit@gmail.com',
      name: 'Mohit Raina',
    },
    {
      id: 3,
      email: 'rana@gmail.com',
      name: 'Rana Singh',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
