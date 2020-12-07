const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa();
const router = new Router();

router.get('/', (ctx)=> {
    ctx.body = 'Hello World! Esto es un ejemplo para IV con Koa.';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
