const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ 
    mensaje: "¡Hola! Este es mi microservicio para la clase de DevOps",
    estado: "En funcionamiento",
    clase: "Ingeniería DevOps - Evaluación 1"
  });
});

app.listen(PORT, () => {
  console.log(`Microservicio corriendo en http://localhost:${PORT}`);
});