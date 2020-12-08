const Koa = require('koa')
const Router = require('koa-router')

const Controller = require('./Controller.js')
const app = new Koa();
const router = new Router();
const control = new Controller();
const bodyParser = require('koa-bodyparser');

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
  ctx.status = 200;
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
    significado: significadoNuevo
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
    traducOrdenadas.push({
      palabra: elemento.getPalabra(),
      significado: elemento.getSignificado()
    });
  });

  ctx.status = 200;
  ctx.body = { lista_traducciones }
});

app.use(router.routes());
app.use(bodyParser());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
