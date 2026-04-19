const http = require('http');
const server = require('../app');

describe('Servidor Hola Mundo', () => {
  afterAll(() => {
    server.close();
  });

  test('Retorna Hola Mundo', done => {
    http.get('http://localhost:3000', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        expect(data).toContain('Hola Mundo');
        done();
      });
    });
  });
});