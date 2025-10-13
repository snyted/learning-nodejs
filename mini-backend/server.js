const http = require("http");

const vehicles = [
  { marca: "Toyota", modelo: "Corolla", ano: 2020 },
  { marca: "Honda", modelo: "Civic", ano: 2021 },
];

const server = http.createServer((req, res) => {
  // Lógica GET
  if (req.method === "GET" && req.url === "/veiculos") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(vehicles));
    return;
  }

  // GET pelo ID
  if (req.method === "GET" && req.url.startsWith("/veiculos/")) {
    const id = Number(req.url.split("/")[2]);

    if (vehicles[id - 1]) {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end(JSON.stringify(vehicles[id - 1]));
    } else {
      console.log("O veículo não foi encontrado, verifique o ID");
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("JSON inválido no corpo da requisição.");
    }
    return;
  }

  // Lógica POST
  if (req.method === "POST" && req.url === "/veiculos") {
    let body = "";

    req.on("data", (chunk) => {
      console.log("Chunk:", chunk);
      body += chunk.toString();
      console.log("novo veiculo (string): ", body);
    });

    req.on("end", () => {
      try {
        const newVehicle = JSON.parse(body);

        // Validações de Dados
        if (!newVehicle.marca || !newVehicle.modelo || !newVehicle.ano) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Faltou algum campo obrigatório.");
          return;
        }

        if (typeof newVehicle.ano !== "number" || newVehicle.ano < 1900) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("O 'ano' deve ser um número válido (ex: 2024).");
          return;
        }
        // Fim das Validações

        // Fazendo um push após validações
        vehicles.push(newVehicle);

        // Respondendo o cliente
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newVehicle), () => {
          console.log("Criado com sucesso!");
        });
      } catch (error) {
        console.error("Erro:", error);
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("JSON inválido no corpo da requisição.");
      }
    });
    return;
  }

  // --- Rota 404 (final) ---
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Rota não encontrada");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
