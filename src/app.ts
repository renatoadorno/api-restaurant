import express from 'express';
// import routes from './routes';
// import ErrorHandler from './middlewares/error';
// import Cors from './middlewares/cors';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    // this.app.use(Cors);
    // this.app.use(routes);
    // this.app.use(ErrorHandler);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Started on port ${PORT}`));
  }
}
