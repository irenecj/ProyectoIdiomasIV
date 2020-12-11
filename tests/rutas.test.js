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
describe("POST /vocabulario/:palabra/:significado", function() {
  //Añadimos la palabra y el significado correctamente
  it('añadir una palabra y su significado', function(done){
    request(app)
      .post('/vocabulario/INFORMÁTICA./INFORMATIQUE.CONJUNTO DE CONOCIMIENTOS TÉCNICOS QUE SE OCUPAN DEL TRATAMIENTO AUTOMÁTICO DE LA INFORMACIÓN POR MEDIO DE COMPUTADORAS.')
      .expect('Content-Type', /json/)
      .expect(201,done);
  });
  //Devolvemos un error ya que la palabra que se quiere añadir ya está registrada
  it("mostrar error 400 si añadimos una palabra que ya existe", function(done){
    request(app)
      .post('/vocabulario/INFORMÁTICA./INFORMATIQUE.SIGNIFICADO DISTINTO AL ANTERIOR PERO CORRESPONDIENTE A LA MISMA PALABRA.')
      .expect('Content-Type', /json/)
      .expect(400,done);
  });
});

//HU1 -> Consultar todo el listado de vocabulario
describe("GET /vocabulario", function() {
  //Mostramos todo el listado de vocabulario
  it('mostrar todo el listado', function(done){
    request(app)
      .get('/vocabulario')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
});

//HU3 -> Buscar una palabra concreta en el listado
describe("GET /vocabulario/:palabra", function(){
  //Mostramos una palabra concreta junto con su significado / traducción 
  it('mostrar palabra concreta', function(done){
    request(app) 
      .get('/vocabulario/INFORMÁTICA.')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
  //Devolvemos un error ya que buscamos una palabra que no existe 
  it('mostrar error 404 si la palabra que buscamos no existe', function(done){
    request(app)
      .get('/vocabulario/LIBRO.')
      .expect('Content-Type', /json/)
      .expect(404,done)
  });
});

//HU4 -> Modificar el significado de una palabra 
describe("PUT /vocabulario/:palabra/:significadoNuevo", function(){
  //Modificamos el significado de una palabra existente 
  it('cambiar significado', function(done){
    request(app)
      .put('/vocabulario/INFORMÁTICA./CAMBIO EL SIGNIFICADO.')
      .expect('Content-Type', /json/)
      .expect(200,done)
  });
  //Devolvemos un error ya que la palabra no existe
  it('mostrar error 404 si la palabra no existe', function(done){
    request(app)
      .put('/vocabulario/LIBRO./CAMBIO EL SIGNFICADO DE PALABRA INEXISTENTE.')
      .expect('Content-Type', /json/)
      .expect(404,done)
  });
});

//HU5 -> Mostrar traducciones que empiezan por una determinada letra 
describe("GET /vocabulario/filtrar/:letra", function(){
  //Mostramos las traducciones que empiezan por dicha letra 
  it('filtrar por letra', function(done){
    request(app)
      .get('/vocabulario/filtrar/I')
      .expect('Content-Type', /json/)
      .expect(200,done)
  });
  //Devolvemos un error si no hay ninguna palabra que comience por dicha letra 
  it('mostrar error 404 ya que no encuentra ninguna palabra', function(done){
    request(app)
      .get('/vocabulario/filtrar/M')
      .expect('Content-Type', /json/)
      .expect(404,done)
  });
});

//HU6 -> Añadir expresión popular al listado de expresiones
describe("POST /expresiones/:expresion/:explicacion", function(){
  //Añadimos la expresión popular correctamente 
  it('añadir expresión popular', function(done){
    request(app) 
      .post("/expresiones/C'EST SIMPLE COMME BONJOUR./SE USA CUANDO ALGO ES TAN FÁCIL COMO DECIR HOLA, ES DECIR, CUANDO ALGO ES FACILÍSIMO.")
      .expect('Content-Type', /json/)
      .expect(201,done)
  });
  //Devolvemos un error si la expresión insertada ya existe 
  it('mostrar error 400 ya que la expresión insertada ya existe', function(done){
    request(app)
      .post("/expresiones/C'EST SIMPLE COMME BONJOUR./LA EXPLICACIÓN ES DISTINTA PERO LA EXPRESIÓN ES LA MISMA.")
      .expect('Content-Type', /json/)
      .expect(400,done)
  });
});

//HU7 -> Mostrar el listado de expresiones populares 
// describe("GET /expresiones", function(){
//   //Mostramos el listado completo de expresiones 
//   it('mostrar expresiones populares', function(done){
//     request(app) 
//       .get('/expresiones')
//       .expect('Content-Type', /json/)
//       .expect(200,done)
//   });
// });

//HU8 -> Mostrar el listado de vocabulario ordenado ascendente o descendentemente 
describe("GET /vocabulario/ordenar/:orden", function(){
  //Ordenamos de manera ascendente
  it('orden ascendente', function(done){
    request(app)
      .get('/vocabulario/ordenar/ASCENDENTE')
      .expect('Content-Type', /json/)
      .expect(200,done)
  });
  //Ordenamos de manera descendente 
  it('orden descendente', function(done){
    request(app)
      .get('/vocabulario/ordenar/DESCENDENTE')
      .expect('Content-Type', /json/)
      .expect(200,done)
  });
  //Devolvemos un error si el orden proporcionado no es ASCENDENTE ni DESCENDENTE
  it('mostrar error 400 ya que el orden proporcionado no es válido', function(done){
    request(app)
      .get('/vocabulario/ordenar/NUMÉRICO')
      .expect('Content-Type', /json/)
      .expect(400,done)
  });
});

//HU9 -> Añadir frase cotidiana al listado de frases 
describe("POST /frases/:frase/:tipo", function(){
  //Añadimos una frase cotidiana
  it('añadir frase cotidiana', function(done){
    request(app)
    .post('/frases/À BIENTÔT.HASTA PRONTO./SALUDO.')
    .expect('Content-Type', /json/)
    .expect(201,done)
  });
  //Devolvemos un error si la frase cotidiana ya existe 
  it('mostrar error 400 ya que la frase ya existe', function(done){
    request(app)
      .post('/frases/À BIENTÔT.HASTA PRONTO./SALUDO.')
      .expect('Content-Type', /json/)
      .expect(400,done)
  });
});

//HU10 -> Mostrar frases cotidianas por tipo 
describe("GET /frases/:tipo", function(){
  //Mostramos las frases por el tipo indicado 
  it('mostrar frases por tipo', function(done){
    request(app)
    .get('/frases/SALUDO.')
    .expect('Content-Type', /json/)
    .expect(200,done)
  });
  //Devolvemos un error si no se encuentra ninguna frase de dicho tipo
  it('mostrar error 404 ya que no hay frases de ese tipo', function(done){
    request(app)
      .get('/frases/PERMISO.')
      .expect('Content-Type', /json/)
      .expect(404,done)
  });
});