import { Request, Response } from "express";

const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Workout API",
      version: "1.0.0",
    },
  },
  apis: ["src/routes/diaries.ts"],
};

// Docs en Json format

const swaggerSpec = swaggerJSDoc(options);

// setup docs

const loadOpenApi = async (app: any, port: any) => {
  await app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)),
    await app.get("/docs.json", (_req: Request, res: Response) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    });
  console.log(`Version 1 Docs are available at http://localhost:${port}/docs`);
};

export default loadOpenApi;
