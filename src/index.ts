import "reflect-metadata";
import express from "express";
import { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ server: "is working" });
});

app.listen(3030, () => {
  console.log("is working");
});
