import { setupServer } from "../src/config/server-setup";

describe("GET /ping:", () => {
  it("returns a 200 OK code with a {response:'pong'} body every time it is called", async () => {
    const fastify = await setupServer();
    const response = await fastify.inject({
      method: "GET",
      url: "/ping",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("pong");
  });
});
