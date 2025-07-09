import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      res.status(403).send({ error: 'No Authentication Token' });
    }
    if (authorization === '123') {
      next();
    } else {
      res.status(401).send({ error: 'Invalid Authentication Token Provided' });
    }
  }
}
