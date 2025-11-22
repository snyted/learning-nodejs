const express = require("express");

const app = express();
const PORT = 3000;
const fs = require("fs").promises;

const filePath = "vehicles.json";

const vehicles = [
  { id: 1, marca: "Toyota", modelo: "Corolla", ano: 2022 },
  { id: 2, marca: "Honda", modelo: "Civic", ano: 2021 },
];

app.use(express.json());

app.get("/veiculos", (req, res) => {
  res.status(200).json(vehicles);
});

app.get("/veiculos/:id", (req, res) => {
  const id = Number(req.params.id);
  const i = id - 1;

  if (!vehicles[i]) {
    res.status(404).send("Veículo não encontrado");
    return;
  }
  res.status(200).json(vehicles[i]);
  return;
});

app.post("/veiculos", (req, res) => {
  const newVehicle = req.body;

  if (!newVehicle.marca || !newVehicle.modelo) {
    res.status(400).send("Faltou algum campo obrigatório.");
    return;
  }
  newVehicle.id = vehicles.length + 1;
  vehicles.push(newVehicle);
  res.status(201).json(newVehicle);
  return;
});

app.put("/veiculos/:id", (req, res) => {
  const id = Number(req.params.id);
  const i = id - 1;
  const updatedData = req.body;

  if (NaN(id) || i < 0 || !vehicles[i]) {
    res.status(404).send("Veículo não encontrado para atualização");
    return;
  }

  if (!updatedData.marca || !updatedData.modelo) {
    res.status(400).send("Faltou algum campo obrigatório (marca ou modelo).");
    return;
  }

  vehicles[i] = updatedData;

  res.status(200).json(vehicles[i]);
  return;
});

app.delete("/veiculos/:id", (req, res) => {
  const id = Number(req.params.id);
  const i = id - 1;

  if (isNaN(id) || i < 0 || !vehicles[i]) {
    res.status(404).send("Veículo não encontrado para exclusão.");
    return;
  }

  const vehicleDeleted = vehicles[id];
  vehicles.splice(i, 1);

  res.status(204).end();
  return;
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
