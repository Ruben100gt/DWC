"use strict";

import { validarFormulario } from "./biblioteca/Ejercicio1.js";

//imports

window.onload = () => {
	const formulario = document.forms.formDisco;

	document.getElementById("botonEnviar").addEventListener(
		"click",
		() => {
			validarFormulario(formulario);
		},
		false
	);

	document.getElementById("botonMostrar").addEventListener(
		"click",
		() => {
			mostrarFormulario();
		},
		false
	);
};
