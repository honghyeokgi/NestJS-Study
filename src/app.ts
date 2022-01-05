import * as express from "express";
import catsRouter from "./cats/cats.routes";

const app: express.Express = express();
const port = 8000;

class Server {
  public app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging 미들웨어
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      next();
    });
    // Json middleware
    this.app.use(express.json());
    this.setRoute();
    // 404 error 미들웨어
    this.app.use((req, res, next) => {
      console.log("error middleware");
      res.send({ error: "404 not found err" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log(`server is on..port:${port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen;
}

init();
