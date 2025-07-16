import { Injectable, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  async validateUser(username: string, password: string) {
    console.log('Inside Authervice.validateUser');
    const userDB = await this.userService.findUserByUsername(username);
    if (userDB) {
      const matched = comparePassword(password, userDB.password);
      if (matched) {
        console.log('User Validation Succesful');
        return matched;
      } else {
        console.log('Passwords do not match');
        return null;
      }
    }
    console.log('User Validation Failed');
    return null;
  }
}
