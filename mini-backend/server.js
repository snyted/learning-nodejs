const http = require("http");

const veiculos = [
  { marca: "Toyota", modelo: "Corolla", ano: 2020 },
  { marca: "Honda", modelo: "Civic", ano: 2021 },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/veiculos") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(veiculos));
    return;
  }

  if (req.method === "POST" && req.url === "/veiculos") {
    let body = "";

    req.on("data", (chunk) => console.log(chunk.toString()));

    req.on("end", () => {
      res.end("Terminou");
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Rota não encontrada");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
