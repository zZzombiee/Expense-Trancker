import express from "express";
import { appRouter } from "./src/router/app.router";

const app = express();

app.use(express.json());

const port = 8000;

app.use("/api", appRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
