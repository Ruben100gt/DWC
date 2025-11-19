"use strict";

import {
	recogerDatos,
	validarFormulario,
	mostrarFormularios,
	guardarFormulario,
} from "./biblioteca/Ejercicio1.js";

//imports

window.onload = () => {
	let discosFormulario = [];
	const formulario = document.forms.formDisco;
	let datos = {};

	document.getElementById("botonEnviar").addEventListener(
		"click",
		() => {
			datos = recogerDatos(formulario);
			if (validarFormulario(datos, formulario)) {
				discosFormulario = [...discosFormulario, datos];
				//falta completar funcion guardarFormulario
				guardarFormulario();
			}
		},
		false
	);

	document.getElementById("botonMostrar").addEventListener(
		"click",
		() => {
			mostrarFormularios(discosFormulario);
		},
		false
	);
};
