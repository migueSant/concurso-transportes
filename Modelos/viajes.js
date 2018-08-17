'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = Schema({
    id_viaje:String,
    Origen:String,
    Destino:String,
    Tipo_carga:String,
    Fecha_inicio: String,
    Encargado: String,
    Fecha_final: String,
});
module.exports = mongoose.model('viajes', projectSchema);