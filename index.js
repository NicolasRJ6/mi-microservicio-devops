const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.json({ 
    mensaje: "nico: Este es mi microservicio para la clase de DevOps",
    estado: "En funcionamiento",
    clase: "Ingeniería DevOps - Evaluación 1"
  });
});

app.get('/status', (req, res) => {
  res.json({ status: "Operativo", uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Microservicio corriendo en http://localhost:${PORT}`);
});