"use strict";

//imports
import { datosFormulario } from "./biblioteca/biblioteca.js";
import { traerDatos, traerMuchosDatos } from "./biblioteca/datosApi.js";
import { validarDatos } from "./biblioteca/validar.js";

window.onload = () => {
	let planetas = [];
	let datosPlaneta = {};
	let datos = [];
	const formulario = document.forms[0];
	let url = "http://swapi.py4e.com/api/people";
	let urls = [
		"http://swapi.py4e.com/api/people",
		"http://swapi.py4e.com/api/people",
		"http://swapi.py4e.com/api/people",
	];

	if (typeof Storage !== "undefined") {
		const obtenerPlanetas = async () => {
			try {
				datos = await traerDatos(url);
				console.log(datos);
				formulario.addEventListener(
					"click",
					(evento) => {
						if (evento.target.type === "button") {
							if (evento.target.nextElementSibling) {
								datosPlaneta = datosFormulario(formulario);
								if (validarDatos(datosPlaneta)) {
									guardarPlanetas();
									planetas = [...planetas, datos];
									localStorage.setItem("planetas", JSON.parse(planetas));
								}
							} else {
							}
						}
					},
					false
				);
			} catch (error) {
				console.log(error.message);
			}
		};
		obtenerPlanetas();
	} else {
		console.error("Este navegador no soporta la API localStorage.");
	}
};
