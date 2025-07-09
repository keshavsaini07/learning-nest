import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'abhi',
      password: 'abhi',
    },
    {
      username: 'danny',
      password: 'danny',
    },
    {
      username: 'mohit',
      password: 'mohit',
    },
    {
      username: 'rana',
      password: 'rana',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
    // return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
