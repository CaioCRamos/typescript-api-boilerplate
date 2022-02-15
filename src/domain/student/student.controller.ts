import express, { Request, Response } from "express";

export default class StudentController {
  public readonly path: string = "/students";
  public readonly pathWithId: string = `${this.path}/:id`;

  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAll);
    this.router.get(this.pathWithId, this.getById);
    this.router.post(this.path, this.create);
    this.router.put(this.pathWithId, this.update);
    this.router.delete(this.pathWithId, this.delete);
  }

  getAll = (request: Request, response: Response) => {
    response.status(200).json({ message: "It's everything working great!" });
  }

  getById = (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    response.status(200).json({ message: `It's everything working great! Id:${id}` });
  }

  create = (request: Request, response: Response) => {
    response.status(201).json(request.body);
  }

  update = (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);
    const result = { id: id, ...request.body };
    response.status(201).json(result);
  }

  delete = (request: Request, response: Response) => {
    response.status(204).json({ message: "Item deleted!" });
  }
}
