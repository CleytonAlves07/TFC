import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import IErrorCodes from '../interface/IErrorCodes';

const errorHandler: ErrorRequestHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, message } = err;
  console.log(`name: ${name}`);
  console.log(`message: ${message}`);
  const errors: IErrorCodes = {
    notFoundError: 404,
    validationError: 400,
    unauthorized: 401,
  };

  const status: number = errors[name] || 500;
  res.status(status).json({ message });

  next();
};

export default errorHandler;
