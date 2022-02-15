import express from "express";
import cors from "cors"
import helmet from "helmet"
import { errorHandler } from "./middleware/error.middleware"
import { notFoundHandler } from "./middleware/not-found.middleware"

export default class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: Array<any>, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorMiddlewares();
  }

  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
  }

  private initializeControllers(controllers: Array<any>) {
    controllers.forEach((controller) => {
      this.app.use('/api/v1', controller.router);
    });
  }

  private initializeErrorMiddlewares() {
    this.app.use(errorHandler);
    this.app.use(notFoundHandler);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port: ${this.port}`);
    });
  }
}
