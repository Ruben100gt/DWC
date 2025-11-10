'use strict';

//imports
import { rompeCabezasInicial } from './biblioteca/Ejercicio1.js';
import { cargarImagenes } from '../biblioteca.js';

window.onload = () => {
	const imagenes = [
		cargarImagenes('./img/inicial/', 9),
		/* cargarImagenes("./img/easy/", 9),
		cargarImagenes("./img/medium/", 9),
		cargarImagenes("./img/hard/", 9),
		cargarImagenes("./img/imposible/", 9), */
	];

	rompeCabezasInicial(imagenes[0]);
};
