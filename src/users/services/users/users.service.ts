import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'abhi',
      password: 'abhi',
    },
    {
      id: 2,
      username: 'danny',
      password: 'danny',
    },
    {
      id: 3,
      username: 'mohit',
      password: 'mohit',
    },
    {
      id: 4,
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

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
