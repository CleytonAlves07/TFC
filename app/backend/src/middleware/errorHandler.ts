import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import IErrorCodes from './IErrorCodes';

 const errorHandler: ErrorRequestHandler = async(
  err: Error, req: Request, res: Response, next: NextFunction
) => {
  const {name, message} = err
  console.log(`name: ${name}`);
  
  const errors: IErrorCodes = {
    NotFoundError: 404,
    ValidationError: 400,
    Unauthorized: 401,
    Created: 201,

  }

  const status: number = errors[name] || 500;
  res.status(status).json({message})

  next();
}

export default errorHandler;