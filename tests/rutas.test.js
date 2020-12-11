const request = require('supertest');
app = require('../src/rutas.js')

describe("GET /", function() {
  it("comprobar que funciona", function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
});

//HU2 -> Añadir una traducción nueva
describe("PUT /vocabulario/:palabra/:significado", function() {
  //Añadimos la palabra y el significado correctamente
  it('añadir una palabra y su significado', function(done){
    request(app)
      .post('/vocabulario/:INFORMATICA./INFORMATIQUE.CONJUNTO DE CONOCIMIENTOS TÉCNICOS QUE SE OCUPAN DEL TRATAMIENTO AUTOMÁTICO DE LA INFORMACIÓN POR MEDIO DE COMPUTADORAS.')
      .expect('Content-Type', /json/)
      .expect(201,done);
  });
  //Devolvemos un error ya que la palabra que se quiere añadir ya está registrada
  it("mostrar error 404 si añadimos una palabra que ya existe", function(done){
    request(app)
      .post('/vocabulario/:INFORMATICA./INFORMATIQUE.SIGNIFICADO DISTINTO AL ANTERIOR PERO CORRESPONDIENTE A LA MISMA PALABRA.')
      .expect('Content-Type', /json/)
      .expect(400,done);
  });
});
