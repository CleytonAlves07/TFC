import * as express from 'express';
import 'express-async-errors';
import errorHandler from './middleware/errorHandler';
import loginRouter from './routes/login.route';
import teamRouter from './routes/team.route';
import MatchRouter from './routes/match.route';
import leaderboardRouter from './routes/leaderboard.route';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    console.log('App');
    this.app.use('/login', loginRouter);
    this.app.use('/login/validate', loginRouter);
    this.app.use('/teams', teamRouter);
    this.app.use('/matches', MatchRouter);
    this.app.use('/leaderboard', leaderboardRouter);
    this.app.use(errorHandler);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
