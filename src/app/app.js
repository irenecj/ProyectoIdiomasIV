var express = require("express");

var app = express();

app.set('appName', 'Proyecto para aprender un idioma');
app.set('port', process.env.PORT || 8888); //Si no usa el puerto de la nube usará el 3000
app.set('json spaces', 2); //espaciados al imprimir json

app.use(bodyParser.json()); //hacer uso de archivos json
app.use(bodyParser.urlencoded({extended: false})); //texto enviado de formularios
app.use(mehotdOverride);

var router = express.Router();

router.get('/', function(req, res) {
  res.send("¡Comenzamos a aprender un idioma nuevo!");
});

app.use(router);

app.listen(apt.get('port'), () =>){
  console.log("Servidor escuchando en el puerto", app.get('port'));
});
