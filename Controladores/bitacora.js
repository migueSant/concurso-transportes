'use strict'
var Bitacora = require('../Modelos/bitacora.js');

var controller ={
	
	nuevoRegistro:  function(req,res){
		var documento = new Bitacora();
        var params = req.body;
        documento.id_viaje = params.id_viaje;
		documento.Nombre_chofer = params.Nombre_chofer;
		documento.Estado = params.Estado;
		documento.Mod_camion = params.Mod_camion;
        documento.Acompanante = params.Acompanante;
		
        var momentoActual = new Date(); 
        var hora = momentoActual.getHours();
        var minuto = momentoActual.getMinutes();
        
        documento.Fecha = Date.now();
        documento.Hora = hora + ":" + minuto;
        
		
		//documento.Fecha = params.Fecha;
        //documento.Hora = params.Hora;
		
		
		documento.save((error, projectStored)=>{
			if (error){
				return res.status(500).send({
					message:"Error al guardar documento, error:11"
				});
			}
			if(!projectStored){
				return res.status(404).send({
					message:"No se pudo guardar el documento, error: 12"
				});
			}
			return res.status(200).send({
				documento:projectStored
			});
		});
	},
	registroDoble:  function(req,res){
		var documento = new Bitacora();
		var documento2 = new Bitacora();
		var f = new Date();
		var params = req.body;
		
        documento.id_viaje = params.id_viaje;
		documento.Nombre_chofer = params.Nombre_chofer;
		documento.Estado = "conduciendo";
        documento.Acompanante = params.Acompanante;
		
		var momentoActual = new Date();
		var hora = momentoActual.getHours();
		var minuto = momentoActual.getMinutes();
		
        documento.Fecha = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
		documento.Hora = hora + ":" + minuto;

		
		documento2.id_viaje = params.id_viaje;
		documento2.Nombre_chofer = params.Acompanante;
		documento2.Estado = "copiloto";
        documento2.Acompanante = params.Nombre_chofer;

        documento2.Fecha = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
		documento2.Hora = hora + ":" + minuto;
		
		documento.save((error, projectStored)=>{
			if (error){
				return res.status(500).send({
					message:"Error al guardar documento, error:11"
				});
			}
			if(!projectStored){
				return res.status(404).send({
					message:"No se pudo guardar el documento, error: 12"
				});
			}
			documento2.save((error, projectStored2)=>{
				if (error){
					return res.status(500).send({
						message:"Error al guardar documento, error:11"
					});
				}
				if(!projectStored2){
					return res.status(404).send({
						message:"No se pudo guardar el documento, error: 12"
					});
				}
				return res.status(200).send({
					projectStored,
					projectStored2
					
				});
			});

		});
		
    },
    consultarBitacora: function(req,res){
		var conductor = req.params.Nombre_chofer;
		if(conductor==null){
			return res.status(404).send({
				message:"El proyecto no existe, error 13"
				});
		}
		Bitacora.find({'Nombre_chofer':conductor},(err,bitacora)=>{
			if (err){
				return res.status(500).send({
					message:"Error al devolver datos, error:14"
				});
			}
			if(!bitacora){
				return res.status(404).send({
					message:"El proyecto no existe, error: 15"
				});
			}
			return res.status(200).send({
					bitacora
				});
			});
		
    },
    consultarBitacoraEstado: function(req,res){
        var conductor = req.params.Nombre_chofer;
        var estado = req.params.Estado;
		if(conductor==null){
			return res.status(404).send({
				message:"El proyecto no existe, error 13"
				});
		}
		Bitacora.find({$and:[{'Nombre_chofer':conductor},{'Estado':estado}]},(err,bitacora)=>{
			if (err){
				return res.status(500).send({
					message:"Error al devolver datos, error:14"
				});
			}
			if(!bitacora){
				return res.status(404).send({
					message:"El proyecto no existe, error: 15"
				});
			}
			return res.status(200).send({
					bitacora
				});
			});
		
    },
    consultarBitacoraFecha: function(req,res){
        var conductor = req.params.Nombre_chofer;
        var fecha = req.params.Fecha;
		if(conductor==null){
			return res.status(404).send({
				message:"El proyecto no existe, error 13"
				});
		}
		Bitacora.find({$and:[{'Nombre_chofer':conductor},{'Fecha':fecha}]},(err,bitacora)=>{
			if (err){
				return res.status(500).send({
					message:"Error al devolver datos, error:14"
				});
			}
			if(!bitacora){
				return res.status(404).send({
					message:"El proyecto no existe, error: 15"
				});
			}
			return res.status(200).send({
					bitacora
				});
			});
		
    },
    consultarBitacoraFechaHora: function(req,res){
        var conductor = req.params.Nombre_chofer;
        var fecha = req.params.Fecha;
        var hora = req.params.Hora;
		if(conductor==null){
			return res.status(404).send({
				message:"El proyecto no existe, error 13"
				});
		}
		Bitacora.find({$and:[{'Nombre_chofer':conductor},{'Fecha':fecha},{'Hora':hora}]},(err,bitacora)=>{
			if (err){
				return res.status(500).send({
					message:"Error al devolver datos, error:14"
				});
			}
			if(!bitacora){
				return res.status(404).send({
					message:"El proyecto no existe, error: 15"
				});
			}
			return res.status(200).send({
					bitacora
				});
			});
		
	},
    consultarBitacoraEstadoFecha: function(req,res){
        var conductor = req.params.Nombre_chofer;
        var fecha = req.params.Fecha;
        var estado = req.params.Estado;
		if(conductor==null){
			return res.status(404).send({
				message:"El proyecto no existe, error 13"
				});
		}
		Bitacora.find({$and:[{'Nombre_chofer':conductor},{'Fecha':fecha},{'Estado':estado}]},(err,bitacora)=>{
			if (err){
				return res.status(500).send({
					message:"Error al devolver datos, error:14"
				});
			}
			if(!bitacora){
				return res.status(404).send({
					message:"El proyecto no existe, error: 15"
				});
			}
			return res.status(200).send({
					bitacora
				});
			});
		
	}
};
module.exports = controller;