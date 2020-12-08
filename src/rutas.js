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

//obtener el listado de vocabulario completo -> HU1
router.get('/vocabulario', (ctx) => {
  ctx.body = control.todasTraducciones();
});

//añadir una traducción nueva -> HU2
router.post('/vocabulario/:palabra/:significado', (ctx) => {
  var palabra = ctx.params.palabra;
  var significado = ctx.params.significado;
  var traducAñadida = control.nuevaTraduccion(palabra,significado);
  ctx.status = 200;
  ctx.body = {
    traducAñadida
  }
});

//buscar una palabra concreta en el listado -> HU3
router.get('/vocabulario/:palabra', (ctx) => {
  var palabra = ctx.params.palabra;
  var traducEncontrada = control.traduccion(palabra);
  ctx.status = 200;
  ctx.body = {
    traducEncontrada
  }
});

  //modificar el significado de una palabra concreta
  router.put('/vocabulario/:palabra/:significadoNuevo',(ctx) => {
    var palabra = ctx.params.palabra;
    var significado = ctx.params.significadoNuevo;
    var traducModificada = control.cambioSignificado(palabra, significado);
    ctx.status = 200;
    ctx.body = {
      traducModificada
    }
  });


    app.use(router.routes());
    app.use(bodyParser());
    app.use(router.allowedMethods());

    app.listen(8080, () => {
      console.log('Server listening on port 8080');
    });
