'use strict';

import { cargarLocalStorage, guardarPlanetas } from './biblioteca/datos.js';
import {
	borrarMensajes,
	mostrarErrores,
	mostrarMensajeCorrecto,
	obtenerDatosFormulario,
	validarFormulario,
	limpiarFormulario,
	insertarContenedorMensaje,
	mostrarPlanetas,
} from './biblioteca/formulario.js';

window.onload = () => {
	const formulario = document.forms.agregarPlaneta;
	const listaPlanetas = document.getElementsByTagName('script')[0].previousElementSibling;
	const contenedorMensaje = insertarContenedorMensaje(formulario);
	let planetas = [];
	const url = 'https://swapi.py4e.com/api/planets/';

	if (typeof Storage !== 'undefined') {
		const cargarPlanetas = async () => {
			try {
				planetas = await cargarLocalStorage(url);
			} catch (error) {
				console.log(error.message);
			}

			formulario.addEventListener(
				'click',
				(evento) => {
					if (evento.target.type === 'button') {
						if (evento.target.nextElementSibling) {
							let datos = obtenerDatosFormulario(formulario);
							if (validarFormulario(datos)) {
								planetas = [...planetas, datos];
								guardarPlanetas(planetas);
								mostrarMensajeCorrecto(contenedorMensaje);
								setTimeout(() => {
									borrarMensajes(contenedorMensaje);
								}, 2000);
								limpiarFormulario(formulario);
							} else {
								mostrarErrores(contenedorMensaje);
							}
						} else {
							listaPlanetas.classList.remove('ocultar');
							mostrarPlanetas(planetas, listaPlanetas);
						}
					}
				},
				false
			);
		};
		cargarPlanetas();
	} else {
		console.log('Su navegador no soporta LocalStorage.');
	}
};
