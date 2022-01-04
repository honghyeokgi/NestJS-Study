import * as express from "express";

const app: express.Express = express();
const port: number = 8000;

app.get("/test", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ name: "hhk", age: "21", friends: ["ss", "yy", "asd"] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/test", (req: express.Request, res: express.Response) => {
  res.send({ person: "hong" });
});
