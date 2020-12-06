const Koa = require('koa')
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World! Esto es un ejemplo para IV con Koa.';
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
