'use strict'

var Usuarios = require('../Modelos/usuarios');

var controller = {
    registrarUsuario: function (req, res) {
        var documento = new Usuarios();
        var params = req.body;

        documento.empresa = params.empresa;
        documento.chofer = params.chofer;
        documento.usuario = params.usuario;
        documento.pass = params.pass;
        documento.licencia = params.licencia;
        documento.jefe = params.jefe;
        documento.rfc = params.rfc;
        documento.carga = params.carga;
        documento.destino = params.destino;
        documento.modelo = params.modelo;
        documento.marca = params.marca;
        documento.placas = params.placas;
        documento.activo = true;


        documento.save((error, doc) => {
            if (error) {
                return res.status(500).send({
                    message: "Error al registrar usuario, error 1-1"
                });
            }
            if (!doc) {
                return res.status(404).send({
                    message: "No se pudo registrar el usuario, error 1-2"
            });
        }
            return res.status(200).send({
                message: doc
            });

        });
    },
    cargarUsuario: function (req,res){
        var usuario_a_Buscar = req.params.usuario;

        if (usuario_a_Buscar == null) {
            return res.status(404).send({
                message: "No se recibio ningun ID, error 1-3"
            });
        }
        Usuarios.find({'usuario': usuario_a_Buscar}, (err, project) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al cargar usuario, error 1-4"
                });
            }
            if (!project) {
                return res.status(404).send({
                    message: "El usuario no existe 1-5"
                });
            }
            return res.status(200).send({
                project
            });

        });
    },
    cargarTodosLosUsuarios : function (req,res) {
        Usuarios.find({}).exec((err,todosLosUsuarios)=>{
            if (err) {
                return res.status(500).send({
                    message: "Error al cargar todos los usuarios, error 1-6"
                });
            }
            if (!todosLosUsuarios) {
                return res.status(404).send({
                    message: "No se encontraron usuarios, error 1-7"
                });
            }
            return res.status(200).send({
                todosLosUsuarios
            });

        });

    },
    actualizarUsuario : function (req,res) {
        var documento = new Usuarios();
            var params = req.body;

        if (params.usuario == null) {
            return res.status(404).send({
                message: "No se recibio ningun ID, error 1-3"
            });
        }
        Usuarios.findOneAndUpdate({'usuario':params.usuario}, params, (err, project) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al cargar usuario, error 1-4"
                });
            }
            if (!project) {
                return res.status(404).send({
                    message: "El usuario no existe 1-5"
                });
            }

            return res.status(200).send({
                message: "Se actualizó el usuario"
            });

        });
    },
    desactivarUsuario : function (req,res) {
        var documento = new Usuarios();
            var usuario = req.params.usuario

        if (usuario == null) {
            return res.status(404).send({
                message: "No se recibio ningun ID, error 1-3"
            });
        }
        Usuarios.findOneAndUpdate({'usuario': usuario}, {'activo':false}, (err, project) => {
            if (err) {
                return res.status(500).send({
                    message: "Error al cargar usuario, error 1-4"
                });
            }
            if (!project) {
                return res.status(404).send({
                    message: "El usuario no existe 1-5"
                });
            }

            return res.status(200).send({
                message: "Se actualizó el usuario"
            });

        });
    }
};
module.exports=controller;
