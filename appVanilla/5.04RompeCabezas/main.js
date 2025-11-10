'use strict';

import {
	borrarPiezas,
	borrarPiezasSoltable,
	rompeCabezasInicial,
	comprobarPuzzle,
	elegirRompecabezas,
} from './biblioteca/Ejercicio1.js';
import { cargarImagenes } from '../biblioteca.js';

window.onload = () => {
	const imagenes = [
		cargarImagenes('./img/inicial/', 9),
		cargarImagenes('./img/Teletubies/', 9),
		cargarImagenes('./img/GatoBobSponge/', 9),
	];

	let puzzle = 0;

	rompeCabezasInicial(imagenes[puzzle]);

	const rompecabezas = document.getElementById('rompecabezas');
	const soltable = document.getElementById('soltables');

	rompecabezas.addEventListener(
		'dragstart',
		(evento) => {
			evento.dataTransfer.setData('identificador', evento.target.id);
		},
		'false'
	);

	rompecabezas.addEventListener(
		'dragover',
		(evento) => {
			evento.preventDefault();
		},
		'false'
	);

	rompecabezas.addEventListener(
		'drop',
		(evento) => {
			evento.preventDefault();
			rompecabezas.appendChild(document.getElementById(evento.dataTransfer.getData('identificador')));
		},
		'false'
	);

	soltable.addEventListener(
		'dragstart',
		(evento) => {
			evento.dataTransfer.setData('identificador', evento.target.id);
		},
		'false'
	);

	soltable.addEventListener(
		'dragover',
		(evento) => {
			evento.preventDefault();
		},
		'false'
	);

	soltable.addEventListener(
		'drop',
		(evento) => {
			evento.preventDefault();
			if (evento.target.classList.contains('soltable')) {
				evento.target.appendChild(document.getElementById(evento.dataTransfer.getData('identificador')));
			}
			let completo = true;
			for (let i = 0; i < soltable.children.length; i++) {
				if (!soltable.children[i].firstChild) {
					completo = false;
					break;
				}
			}
			if (completo) {
				comprobarPuzzle();
			}
		},
		'false'
	);

	document.getElementById('reiniciar').addEventListener(
		'click',
		() => {
			borrarPiezasSoltable(soltable);
			borrarPiezas(rompecabezas);
			rompeCabezasInicial(imagenes[puzzle]);
			document.getElementById('ganar').innerHTML = '';
		},
		'false'
	);

	document.getElementById('botones').addEventListener(
		'click',
		(evento) => {
			puzzle = elegirRompecabezas(evento);
			//Activamos el botón "reiniciar" para poder cambiar el rompecabezas sin usar código innecesario.
			document.getElementById('reiniciar').click();
		},
		'false'
	);
};
