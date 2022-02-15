import express, { Request, Response } from "express";

export const studentsRouter = express.Router();

studentsRouter.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "It's everything working great!" });
});

studentsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  if (id != 1) {
    res.status(200).json({ message: `It's everything working great! Id:${id}` });
  } else {
    res.status(501);
  }
});

studentsRouter.post("/", async (req: Request, res: Response) => {
  res.status(201).json(req.body);
});

studentsRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  const result = { id: id, ...req.body };
  res.status(201).json(result);
});

studentsRouter.delete("/:id", async (req: Request, res: Response) => {
  res.status(204).json({ message: "Item deleted!" });
}); 
