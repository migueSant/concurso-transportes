'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = Schema({
    id_viaje: String,
    Fecha: String,
    Hora: String,  
    Nombre_chofer:String,
    Mod_camion:String,
    Estado: String,
    Acompañante: String
});
module.exports = mongoose.model('bitacora', projectSchema);