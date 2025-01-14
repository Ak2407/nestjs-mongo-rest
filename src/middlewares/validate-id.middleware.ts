import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

@Injectable()
export class ValidateIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    // Check if the id is a valid MongoDB ObjectId
    const isValid = mongoose.isValidObjectId(id);
    if (!isValid) {
      throw new HttpException('Invalid ID', 400); // or use any status code you want
    }

    next();
  }
}
