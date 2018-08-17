'use strict'

var mongose = require('mongoose');
var app = require('./app.js');

mongose.Promise = global.Promise;

// Usamos el método connect para conectarnos a nuestra base de datos
mongose.connect('mongodb://localhost:27017/bdtransport')
    .then(() => {
    // Cuando se realiza la conexión, lanzamos este mensaje por consola
    console.log('La conexión a MongoDB se ha realizado correctamente!!');
/*app.listen(port, ()=>{ console.log("servidor corriendo correctamente en la URL");
 });*/
})
.catch(err => console.log(err));
// Si no se conecta correctamente escupimos el error