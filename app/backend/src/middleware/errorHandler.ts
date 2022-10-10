import { ErrorRequestHandler } from 'express';
import IErrorCodes from '../interface/IErrorCodes';

const errorHandler: ErrorRequestHandler = async (err, _req, res, next) => {
  const { name, message } = err;
  console.log(`name: ${name}`);
  console.log(`message: ${message}`);
  const errors: IErrorCodes = {
    notFoundError: 404,
    validationError: 400,
    unauthorized: 401,
  };

  if (name === 'JsonWebTokenError') {
    res.status(401).json({message:'Token must be a valid token'});
  }
  const status: number = errors[name] || 500;
  res.status(status).json({ message });

  next();
};

export default errorHandler;
