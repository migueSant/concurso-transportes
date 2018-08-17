'use strict'

var express = require('express');


//Controladores
var ProjectControllerb = require('./Controladores/bitacora');
var ProjectControlleru = require('./Controladores/usuarios');
var ProjectControllerv = require('./Controladores/viajes');

var router = express.Router();


//-----------Rutas Bitacora
router.post('/nuevoRegistro',ProjectControllerb.nuevoRegistro);
router.post('/registroDoble',ProjectControllerb.registroDoble);
router.get('/consultarBitacora/:Nombre_chofer',ProjectControllerb.consultarBitacora);
router.get('/consultarBitacoraE/:Nombre_chofer/:Estado',ProjectControllerb.consultarBitacoraEstado);
router.get('/consultarBitacoraF/:Nombre_chofer/:Fecha',ProjectControllerb.consultarBitacoraFecha);
router.get('/consultarBitacoraFH/:Nombre_chofer/:Fecha/:Hora',ProjectControllerb.consultarBitacoraFechaHora);
router.get('/consultarBitacoraEF/:Nombre_chofer/:Fecha/:Estado',ProjectControllerb.consultarBitacoraEstadoFecha);
router.post('/registrarUsuario', ProjectControlleru.registrarUsuario);
router.get('/cargarUsuario/:usuario', ProjectControlleru.cargarUsuario);
router.get('/cargarTodosLosUsuarios', ProjectControlleru.cargarTodosLosUsuarios);
router.put('/actualizarUsuario', ProjectControlleru.actualizarUsuario);
router.put('/desactivarUsuario/:usuario', ProjectControlleru.desactivarUsuario);
router.post('/registrarViaje', ProjectControllerv.nuevoViaje);
router.get('/consultarViaje/:id_viaje', ProjectControllerv.consultarViaje);
router.get('/consultarViajeOrigen/:Origen', ProjectControllerv.consultarViajeOrigen);
router.get('/consultarViajeDestino/:Destino', ProjectControllerv.consultarViajeDestino);
router.put('/actualizarViaje/:id_viaje', ProjectControllerv.actualizarViaje);
router.put('/terminarViaje/:id_viaje', ProjectControllerv.actualizarFechaFinal);

module.exports = router;