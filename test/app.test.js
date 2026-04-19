const http = require('http');
const server = require('../app'); // importa el servidor desde app.js

describe('Servidor Hola Mundo', () => {
  // Cierra el servidor después de todas las pruebas
  afterAll(() => {
    server.close();
  });

  test('Retorna Hola Mundo', done => {
    http.get('http://localhost:3000', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        expect(data).toContain('Hola Mundo'); // comprueba que la respuesta contiene "Hola Mundo"
        done();
      });
    });
  });
});
