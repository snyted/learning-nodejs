const http = require("http");
const fs = require("fs");

const FILENAME = "vehicles.json";

let vehicles = [];

if (fs.existsSync(FILENAME)) {
  const data = fs.readFileSync(FILENAME, "utf8");
  vehicles = JSON.parse(data);
} else {
  vehicles = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Honda", modelo: "Civic", ano: 2021 },
  ];
}

function saveVehicles() {
  try {
    const jsonString = JSON.stringify(vehicles, null, 2);
    fs.writeFileSync(FILENAME, jsonString, "utf8");
  } catch (err) {
    console.error("Erro ao salvar dados no disco:", err);
  }
}

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

    req.on("data", (chunk) => (body += chunk.toString()));

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
        saveVehicles();
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

  //   Logica PUT
  if (req.method === "PUT" && req.url.startsWith("/veiculos/")) {
    const id = Number(req.url.split("/")[2]);
    const i = id - 1;
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));

    req.on("end", () => {
      try {
        const updatedData = JSON.parse(body);

        vehicles[i] = updatedData;

        saveVehicles();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(updatedData));
      } catch (error) {
        console.error("Erro na atualização/PUT", error);
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("JSON inválido ou dados malformados.");
      }
    });
    return;
  }

  //   Lógica DELETE
  if (req.method === "DELETE" && req.url.startsWith("/veiculos/")) {
    const id = Number(req.url.split("/")[2]);
    const i = id - 1;
    
    if (vehicles[i]) {
      try {
        vehicles.splice(i, 1);
        saveVehicles();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end("Veiculo deletado.");
      } catch (error) {
        console.error("Erro na remoção/DELETE do veículo", error);
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Não foi possível deletar. Verifique a rota e o id.");
      }
    }

    return;
  }

  // --- Rota 404 (final) ---
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Rota não encontrada");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
