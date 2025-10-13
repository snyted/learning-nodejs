const http = require("http");

const vehicle = [
  { marca: "Toyota", modelo: "Corolla", ano: 2020 },
  { marca: "Honda", modelo: "Civic", ano: 2021 },
];

const server = http.createServer((req, res) => {
  // Método GET
  if (req.method === "GET" && req.url === "/veiculos") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(vehicle));
    return;
  }

  // Método POST
  if (req.method === "POST" && req.url === "/veiculos") {
    let body = "";

    req.on("data", (chunk) => {
      console.log("Chunk:", chunk);

      body += chunk.toString();
      console.log("novo veiculo: ", body);
    });
    req.on("end", () => {
      try {
        const newVehicle = JSON.parse(body);
        vehicle.push(newVehicle);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(body);
      } catch (error) {
        console.error("Erro:", error);
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("JSON inválido no corpo da requisição.");
      }
    });

    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Rota não encontrada");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
