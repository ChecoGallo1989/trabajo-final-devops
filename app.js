const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Arranca el servidor
const server = app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

// Exporta el servidor para que las pruebas lo puedan usar
module.exports = server;
