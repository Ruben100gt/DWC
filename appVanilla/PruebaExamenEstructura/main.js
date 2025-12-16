'use strict';

//imports
import { datosFormulario } from './biblioteca/biblioteca.js';
import { traerDatos } from './biblioteca/datosApi.js';
import { validarDatos } from './biblioteca/validar.js';

window.onload = () => {
	let planetas = [];
	let datosPlaneta = {};
	let datos = [];
	const formulario = document.forms[0];
	let url = 'http://swapi.py4e.com/api/people';

	if (typeof Storage !== 'undefined') {
		const obtenerPlanetas = async (url) => {
			try {
				datos = await traerDatos(url);

				formulario.addEventListener(
					'click',
					(evento) => {
						if (evento.target.type === 'button') {
							if (evento.target.nextElementSibling) {
								datosPlaneta = datosFormulario(formulario);
								validarDatos(datosPlaneta) && guardarPlanetas();
								planetas = [...planetas, datos];
								//guardar localstorage
							} else {
							}
						}
					},
					false
				);

				console.log('hola');
			} catch (error) {
				console.log(error.message);
			}
		};
		obtenerPlanetas(url);
	} else {
		console.error('Este navegador no soporta la API localStorage.');
	}
};
