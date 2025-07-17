import { Controller, Post, UseGuards, Get, Req, Session } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login() {
    // return req.user;
  }

  @Get('')
  getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    console.log(session.id);
    session.authenticated = true;
    return session;
  }

  // protected route
  @UseGuards(AuthenticatedGuard)
  @Get('status')
  getAuthStatus(@Req() req: Request) {
    return req.user;
  }
}
