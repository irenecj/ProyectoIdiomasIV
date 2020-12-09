const Koa = require('koa')
const Router = require('koa-router')

const Controller = require('./controller.js')
const app = new Koa();
const router = new Router();
const control = new Controller();
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

//prueba para saber que todo funciona correctamente
router.get('/', (ctx) => {
  ctx.status = 200;
  ctx.body = 'La API está funcionando.';
});

//añadir una traducción nueva -> HU2
router.post('/vocabulario/:palabra/:significado', (ctx) => {
  var palabra = ctx.params.palabra;
  var significado = ctx.params.significado;
  control.nuevaTraduccion(palabra,significado);
  ctx.status = 201;
  ctx.body = {
    palabra: palabra,
    significado: significado
  }
});

//obtener el listado de vocabulario completo -> HU1
router.get('/vocabulario', (ctx) => {
  var traducciones = control.todasTraducciones();
  var lista_traducciones = [];
  traducciones.forEach(elemento => {
    lista_traducciones.push({
      palabra: elemento.getPalabra(),
      significado: elemento.getSignificado()
    });
  });
  ctx.status = 200;
  ctx.body = { lista_traducciones };
});

//buscar una palabra concreta en el listado -> HU3
router.get('/vocabulario/:palabra', (ctx) => {
  var palabra = ctx.params.palabra;
  var significadoEncontrado = control.traduccion(palabra);
  ctx.status = 200;
  ctx.body = {
    palabra: palabra,
    significado: significadoEncontrado
  }
});

//modificar el significado de una palabra concreta -> HU4
router.put('/vocabulario/:palabra/:significadoNuevo',(ctx) => {
  var palabra = ctx.params.palabra;
  var significado = ctx.params.significadoNuevo;
  control.cambioSignificado(palabra, significado);
  ctx.status = 200;
  ctx.body = {
    palabra: palabra,
    significado: significado
  }
});

//mostrar traducciones que empiezan por una determinada letra -> HU5
router.get('/vocabulario/filtrar/:letra', (ctx) => {
  var letra = ctx.params.letra;
  var traducciones = control.filtrarLetra(letra);
  var lista_traducciones = [];
  traducciones.forEach(elemento => {
    lista_traducciones.push({
      palabra: elemento.getPalabra(),
      significado: elemento.getSignificado()
    });
  });

  ctx.status = 200;
  ctx.body = { lista_traducciones };
});

//mostrar palabras ordenadas alfabéticamente de manera ascendente o descendente -> HU8
router.get('/vocabulario/ordenar/:orden', (ctx) => {
  var orden = ctx.params.orden;
  var traducOrdenadas = control.ordenarVocab(orden);
  var lista_traducciones = [];
  traducOrdenadas.forEach(elemento => {
    lista_traducciones.push({
      palabra: elemento.getPalabra(),
      significado: elemento.getSignificado()
    });
  });

  ctx.status = 200;
  ctx.body = { lista_traducciones }
});

//añadir expresiones populares -> HU6
router.post('/expresiones/:expresion/:explicacion', (ctx) => {
  var expresion = ctx.params.expresion;
  var explicacion = ctx.params.explicacion;
  control.nuevaExpresion(expresion, explicacion);
  ctx.status = 201;
  ctx.body = {
    expresion: expresion,
    explicacion: explicacion
  }
});

//mostrar todas las expresiones populares -> HU7
router.get('/expresiones', (ctx) => {
  var expresiones = control.todasExpresiones();
  var lista_expresiones = [];
  expresiones.forEach(elemento => {
    lista_expresiones.push({
      expresion: elemento.getExprPopular(),
      explicacion: elemento.getExplicacion()
    });
  });
  ctx.status = 200;
  ctx.body = { lista_expresiones }
});

//añadir frases cotidianas -> HU9
router.post('/frases/:frase/:tipo', (ctx) => {
  var frase = ctx.params.frase;
  var tipo = ctx.params.tipo;
  control.nuevaFrase(frase,tipo);
  ctx.status = 201;
  ctx.body = {
    frase: frase,
    tipo: tipo
  }
});

//mostrar frases cotidianas por tipo -> HU10
router.get('/frases/:tipo', (ctx) => {
  var tipo = ctx.params.tipo;
  var frases = control.todasFrases(tipo);
  var lista_frases = [];
  frases.forEach(elemento => {
    lista_frases.push({
      frase: elemento.getFrase(),
      tipo: elemento.getTipo()
    });
  });
  ctx.status = 200;
  ctx.body = { lista_frases }
});

//middleware para registrar log
app.use(logger());

//middleware para gestión de errores
app.use(async (ctx,next) => {
  try{
    await next();
  }catch(err){
    ctx.status = err.code;
    ctx.body = err.message;
  }
});

app.use(router.allowedMethods());
app.use(router.routes()); //pasamos a Koa todas las rutas mediante un middleware

app.use(bodyParser());


app.listen(8080, () => {
  console.log('Server listening on port 8080');
});

module.exports = app;