var restify = require('restify');

const server = restify.createServer({
  name: 'appiv',
  version: '1.0.0'
});

server.get('/', function (req, res, next){
  res.send('Hello World! Esto es un ejemplo para IV con Restify.');
  return next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
