'use strict'
var Viaje = require('../Modelos/viajes.js');

var controller ={
	
	nuevoViaje:  function(req,res){
		var documento = new Viaje();
        var params = req.body;
        documento.id_viaje = params.id_viaje;
        documento.Origen = params.Origen;		
        documento.Destino = params.Destino;
		documento.Tipo_carga = params.Tipo_carga;
		documento.Encargado = params.Encargado;
		var f = new Date();
        documento.Fecha_inicio = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
        documento.Fecha_final ="";
		
        
		
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
				viaje:projectStored
			});
		});
    },
	
    consultarViaje: function(req,res){
		var idViaje = req.params.id_viaje;
		if(idViaje==null){
			return res.status(404).send({
				message:"El proyecto no existe, error 13"
				});
		}
		Viaje.find({'id_viaje':idViaje},(err,viaje)=>{
			if (err){
				return res.status(500).send({
					message:"Error al devolver datos, error:14"
				});
			}
			if(!viaje){
				return res.status(404).send({
					message:"El proyecto no existe, error: 15"
				});
			}
			return res.status(200).send({
					viaje
				});
			});
		
    },
    consultarViajeOrigen: function(req,res){
		var origen = req.params.Origen;
		if(origen==null){
			return res.status(404).send({
				message:"El proyecto no existe, error 13"
				});
		}
		Viaje.find({'Origen':origen},(err,viaje)=>{
			if (err){
				return res.status(500).send({
					message:"Error al devolver datos, error:14"
				});
			}
			if(!viaje){
				return res.status(404).send({
					message:"El proyecto no existe, error: 15"
				});
			}
			return res.status(200).send({
					viaje
				});
			});
		
    },
    consultarViajeDestino: function(req,res){
		var destino = req.params.Destino;
		if(destino==null){
			return res.status(404).send({
				message:"El proyecto no existe, error 13"
				});
		}
		Viaje.find({'Destino':destino},(err,viaje)=>{
			if (err){
				return res.status(500).send({
					message:"Error al devolver datos, error:14"
				});
			}
			if(!viaje){
				return res.status(404).send({
					message:"El proyecto no existe, error: 15"
				});
			}
			return res.status(200).send({
					viaje
				});
			});
		
    },
    actualizarViaje: function(req,res){
		var id_a_Buscar = req.params.id_viaje;
		var campos_actualizados = req.body;
		
		Viaje.findOneAndUpdate({'id_viaje':id_a_Buscar}, campos_actualizados, (err,projectActualizado)=>{
					if (err){
				return res.status(500).send({
					message:"Error al actualizar, error:16"
				});
			}
			if(!projectActualizado){
				return res.status(404).send({
					message:"El proyecto no existe, error: 17"
				});
			}
				return res.status(200).send({
					viajeActualizado: projectActualizado
			
				});
			
			});
		
		
    },
    actualizarFechaFinal: function(req,res){
		var id_a_Buscar = req.params.id_viaje;

        var params = req.body;
        origen = params.Origen;		
        destino = params.Destino;
		tipo_carga = params.Tipo_carga;
		encargado = params.Encargado;
		var f = new Date();
		var fechaFinal =  f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
		
		Viaje.findOneAndUpdate({'id_viaje':id_a_Buscar}, {'Fecha_final':fechaFinal}, (err,projectActualizado)=>{
					if (err){
				return res.status(500).send({
					message:"Error al actualizar, error:16"
				});
			}
			if(!projectActualizado){
				return res.status(404).send({
					message:"El proyecto no existe, error: 17"
				});
			}
				return res.status(200).send({
					viajeTerminado: projectActualizado
			
				});
			
			});
		
		
	}
   
};
module.exports = controller;