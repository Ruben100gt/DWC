'use strict';

import {
	datosFormulario,
	insertarDivMensajes,
	mensajeError,
	mensajeCorrecto,
	limpiarFormulario,
	validarDatos,
	limpiarMensajes,
	pintarMisiones,
	filtrarMisiones,
} from './biblioteca/formulario.js';
import {
	guardarLocalStorage,
	obtenerLocalStorage,
	resetearMisionesLocalStorage,
	eliminarMision,
	traerDatos,
	pintarApi,
	pintarPeliDetalle,
	pintarPersonajes,
	traerMuchosDatos,
} from './biblioteca/datos.js';

window.onload = () => {
	const formulario = document.forms.formMision;
	const divBotones = document.getElementsByClassName('botones')[0];
	const divMensaje = insertarDivMensajes(divBotones);
	const divMisiones = document.getElementById('contenedorMisiones');
	const divApi = document.getElementById('api-section');
	const buscar = document.getElementsByClassName('buscador')[0];
	let filtro = [];
	let misiones = [];
	let url = 'http://localhost:3000/peliculas';
	const listaPeli = document.getElementById('listaPeliculas');
	const detallePeli = document.getElementById('detallePelicula');
	let pelis = [];
	let personajes = [];

	if (typeof Storage !== 'undefined') {
		misiones = obtenerLocalStorage();

		divBotones.addEventListener(
			'click',
			(evento) => {
				if (evento.target.type === 'button') {
					if (evento.target.nextElementSibling) {
						let datos = datosFormulario(formulario);
						if (validarDatos(datos)) {
							misiones = [...misiones, datos];
							guardarLocalStorage(misiones);
							pintarMisiones(divMisiones, misiones);
							limpiarFormulario(formulario);
							mensajeCorrecto(divMensaje);
							setInterval(() => {
								limpiarMensajes(divMensaje);
							}, 2000);
						} else {
							mensajeError(divMensaje);
						}
					} else {
						misiones = [];
						resetearMisionesLocalStorage();
						pintarMisiones(divMisiones, misiones);
					}
				}
			},
			false
		);
		divMisiones.addEventListener(
			'click',
			(evento) => {
				if (evento.target.value === 'eliminar') {
					eliminarMision(evento.target.id, misiones);
					misiones = obtenerLocalStorage();
					pintarMisiones(divMisiones, misiones);
				}
			},
			false
		);

		buscar.addEventListener(
			'input',
			(evento) => {
				filtro = filtrarMisiones(evento.target.value, misiones);
				pintarMisiones(divMisiones, filtro);
			},
			false
		);

		const api = async () => {
			try {
				pelis = await traerDatos(url);
				pintarApi(pelis, listaPeli);
			} catch (error) {
				console.log(error.message);
			}
		};

		const apiMuchos = async (valor) => {
			try {
				let peli = pelis.find((p) => {
					return valor === p.id;
				});
				personajes = await traerMuchosDatos(peli.personajes);
				pintarPersonajes(personajes, detallePeli);
			} catch (error) {
				console.log(error.message);
			}
		};

		divApi.addEventListener(
			'click',
			(evento) => {
				if (evento.target.id === 'btnCargarAPI') api();
				if (evento.target.tagName === 'P') {
					let peliDetalle = pelis.find((p) => {
						return evento.target.id === p.id;
					});
					pintarPeliDetalle(peliDetalle, detallePeli);
				}
				if (evento.target.value) {
					apiMuchos(evento.target.value);
				}
			},
			false
		);

		pintarMisiones(divMisiones, misiones);
	} else {
		console.log('Su navegador no spoporta localStorage.');
	}
};
