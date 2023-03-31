import { FastifyInstance } from "fastify";
import { getCrash, getCrashes } from "../src/controllers";
import { setupServer } from "../src/config";
import { CrashOutputDTO } from "src/dtos/crash";

let fastify: FastifyInstance;

beforeAll(async () => {
  fastify = await setupServer();
});

describe("POST /crashes:", () => {
  it("Returns 422 with validation information if the request's body is not formatted correctly", async () => {
    const payload = {
      bondia: "sir",
    };

    const response = await fastify.inject({
      method: "POST",
      url: "/crashes",
      payload,
    });

    expect(response.statusCode).toBe(422);
    expect(JSON.parse(response.body).validation).toBeTruthy();
  });
  it("Does not add a new crash to the database upon failure", async () => {
    const payload = {
      bondia: "sir",
    };
    const currentItemNumber = await getCrashes().then((result) => {
      return result.length;
    });

    await fastify.inject({
      method: "POST",
      url: "/crashes",
      payload,
    });

    const newItemNumber = await getCrashes().then((result) => {
      return result.length;
    });
    expect(newItemNumber).toBe(currentItemNumber);
  });
  it("Adds a crash to the database and returns its information if the payload is correct", async () => {
    const type = "testType";
    const message = "testMessage";
    const payload = {
      type,
      message,
    };
    const currentItemNumber = await getCrashes().then((result) => {
      return result.length;
    });

    const response = await fastify.inject({
      method: "POST",
      url: "/crashes",
      payload,
    });
    const body = JSON.parse(response.body) as CrashOutputDTO;

    const newItemNumber = await getCrashes().then((result) => {
      return result.length;
    });
    const createdItem = await getCrash(body.id);
    expect(newItemNumber).toBe(currentItemNumber + 1);
    expect(createdItem.id).toBe(body.id);
    expect(createdItem.type).toBe(type);
    expect(createdItem.message).toBe(message);
    expect(body.message).toBe(message);
    expect(body.type).toBe(type);
  });
});

describe("GET /crashes:", () => {
  it("Returns 200 OK with a body every time it's called", async () => {
    const response = await fastify.inject({
      method: "GET",
      url: "/crashes",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });
});

describe("GET /crashes:id", () => {
  it("Returns 404 if the id doesn't exist", async () => {
    const id = "inexistent-id";
    const response = await fastify.inject({
      method: "GET",
      url: `/crashes/${id}`,
    });
    expect(response.statusCode).toBe(404);
  });

  it("Returns 200 OK with the body of the corresponding id", async () => {
    const responseGet = await fastify.inject({
      method: "GET",
      url: "/crashes",
    });
    const crashes = JSON.parse(responseGet.body);
    const itemNumber = await getCrashes().then((result) => {
      return result.length;
    });
    const randomItem = Math.floor(Math.random() * itemNumber);
    const id = crashes[randomItem].id;
    const response = await fastify.inject({
      method: "GET",
      url: `/crashes/${id}`,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });
});
