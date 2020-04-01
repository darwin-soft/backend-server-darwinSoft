// Requires

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// Inicializar variable 

var app = express();

// body Parser
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importar rutas

var appRutas = require('./rutas/app');
var usuarioRutas = require('./rutas/usuario');
var loginRutas = require('./rutas/login');

// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});


//Rutas 
app.use('/usuario', usuarioRutas);
app.use('/login', loginRutas);
app.use('/', appRutas);


// Escuchar petiones 

app.listen(3000, () => {
    console.log('Express serve puerto 3000:\x1b[32m%s\x1b[0m', ' online');
});