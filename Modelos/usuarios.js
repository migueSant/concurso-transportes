'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = Schema({
 empresa:String,
 chofer:String,
 usuario: String,
 pass: String,
 licencia:String,
 jefe:String,
 rfc:String,
 carga:String,
 destino:String,
 modelo:String,
 marca:String,
 placas:String,
 activo:Boolean
 });
module.exports = mongoose.model('usuarios', projectSchema);