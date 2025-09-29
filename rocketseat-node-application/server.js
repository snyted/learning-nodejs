// MÉTODO NODE TRADICIONAL.

// import { createServer } from "node:http";

// const server = createServer((req, res) => {
//     res.write('Hello World')
//   return res.end()
// });

// server.listen(3333);

// USANDO FASTIFY

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory";

const server = fastify();

// GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS...

server.get("/videos", () => {
  return "Hello World";
});

server.post("/videos", () => {
  return "Hello World";
});

server.put("/videos/:id", () => {
  return "Hello World";
});

server.delete("/videos/:id", () => {
  return "Hello World";
});

server.listen({
  port: 3333,
});
