import * as sinon from 'sinon';
import * as chai from 'chai';
import { before, after, describe } from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');
import { ILoginUser, IUserCredentials } from '../interface/IUser';
import { createToken } from '../helpers/jwt';

import { app } from '../app';
import User from '../database/models/user.model';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('O endpoint login', () => {
  const fake: IUserCredentials = {
    id: 1,
    username: 'Charles Volotao',
    role: 'admin',
    email: 'charlesMentes@trybeclub.com.br',
  }

  const fakeUserLogin: ILoginUser = {
    email: fake.email,
    password: 'minhalindasenhasegura!' 
 }

  const token = createToken(fake);
 
  
   let chaiHttpResponse: Response;

   before(async () => {
     sinon
       .stub(User, "findOne")
       .resolves(fake as User);
   });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Se o endpoint login retorna o status 200 e um token', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(fakeUserLogin);
      
       

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({ token });
  });

  it('Se ao não enviar um email uma mensagem de alerta aparece', async () => {
    const fakeUserLoginSemEmail = {
    password: 'minhalindasenhasegura!' 
 }
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(fakeUserLoginSemEmail);

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({ "message": "All fields must be filled" })
  });
});
