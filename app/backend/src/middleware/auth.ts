import { NextFunction, Request, Response } from 'express';
import HttpException from '../service/validations/HttpException';
import { validateToken } from '../helpers/jwt';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) throw new HttpException('unauthorized', 'Token não enviado!');
  const isValid = validateToken(authorization);
  if (!isValid) throw new HttpException('validationError', 'Token inválido!');
  next();
}

export default auth;