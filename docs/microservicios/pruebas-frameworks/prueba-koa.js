const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa();
const router = new Router();

router.get('/', (ctx,next)=> {
  try{
    ctx.body = 'Hello World! Esto es un ejemplo para IV con Koa.';
  }catch(err) {
    next(err);
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
