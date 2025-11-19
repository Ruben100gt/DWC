'use strict';

import {
	recogerDatos,
	validarFormulario,
	mostrarFormularios,
	guardarFormulario,
	buscarDiscos,
} from './biblioteca/Ejercicio1.js';

//imports

window.onload = () => {
	let discosFormulario = [];
	const formulario = document.forms.formDisco;
	let datos = {};
	const textoBuscar = document.getElementById('textoBuscar');
	const mostrar = document.getElementById('listadoDiscos');

	if (typeof Storage !== 'undefined') {
		// Cargar discos guardados
		discosFormulario = JSON.parse(localStorage.getItem('coleccionDiscos')) || [];

		// Mostrar los discos al cargar
		mostrarFormularios(discosFormulario, mostrar);

		document.getElementById('botonEnviar').addEventListener(
			'click',
			() => {
				const id = crypto.randomUUID();
				datos = recogerDatos(formulario, id);
				if (validarFormulario(datos, formulario)) {
					discosFormulario = [...discosFormulario, datos];
					guardarFormulario(discosFormulario);
				}
			},
			false
		);

		document.getElementById('botonMostrar').addEventListener(
			'click',
			() => {
				mostrarFormularios(discosFormulario, mostrar);
			},
			false
		);

		document.getElementById('botonBuscar').addEventListener(
			'click',
			() => {
				mostrarFormularios(buscarDiscos(textoBuscar.value, discosFormulario), mostrar);
			},
			false
		);

		document.getElementById('botonLimpiar').addEventListener(
			'click',
			() => {
				mostrarFormularios(discosFormulario, mostrar);
			},
			false
		);

		mostrar.addEventListener(
			'click',
			(evento) => {
				if (evento.target.classList.contains('botonEliminar')) {
					const id = evento.target.getAttribute('data-id');
					if (confirm('¿Estás seguro de que quieres eliminar este disco?')) {
						discosFormulario = discosFormulario.filter((disco) => disco.id !== id);
						guardarFormulario(discosFormulario);
						mostrarFormularios(discosFormulario, mostrar);
					}
				}
			},
			false
		);
	} else {
		console.error('Este navegador no soporta la API localStorage.');
	}
};
