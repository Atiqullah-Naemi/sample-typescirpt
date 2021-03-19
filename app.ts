import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "working typescirpt app..." });
});

app.listen(PORT, () => console.log(`app running on ${PORT}`));
