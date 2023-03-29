import express, { Request, Response } from "express";

const router = express.Router();
export const pingRoutes = (server: any, req: any, done: () => void) => {
  router.get("/ping", (server: any, _req: Request, res: Response) => {
    console.log("Someone pinged");
    res.send("pong");
  });
  done();
};
