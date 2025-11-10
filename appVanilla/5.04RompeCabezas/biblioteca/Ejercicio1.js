'use strict';

import { desordenarArray } from '../../biblioteca.js';

const rompeCabezasInicial = (imagenes) => {
	const nuevasImagenes = desordenarArray(imagenes);
	const tabla = document.getElementById('rompecabezas');
	for (let i = 0; i < nuevasImagenes.length; i++) {
		tabla.insertAdjacentHTML(
			'beforeend',
			//Usamos el substring para poner el id el "nombre" de la imagen, ya que no podemos usar "i" porque las imagenes están desordenadas.
			`<img id=${nuevasImagenes[i].substring(
				nuevasImagenes[i].length - 5,
				nuevasImagenes[i].length - 4
			)} class="pieza" src="${nuevasImagenes[i]}"></img>`
		);
	}
};

const borrarPiezasSoltable = (soltable) => {
	let tablero = soltable.children;
	for (let a of tablero) {
		a.innerHTML = '';
	}
};

const borrarPiezas = (rompecabezas) => {
	rompecabezas.innerHTML = '';
};

const comprobarPuzzle = () => {
	const soltables = document.getElementById('soltables');
	let correcto = true;

	for (let i = 0; i < soltables.children.length; i++) {
		const celda = soltables.children[i];

		const idImagen = parseInt(celda.firstChild.id);
		const idCelda = parseInt(celda.id);

		// Esto no es reutilizable, ya que al cambiar el id o añadir más imagenes/huecos en soltable no funcionaría.
		if (idImagen + 9 !== idCelda) {
			correcto = false;
			break;
		}
	}

	document.getElementById('ganar').innerHTML = correcto ? '¡Felicidades! Has completado el puzzle.' : '';
};

//He visto necesario crear esta función ya que al cambiar de rompecabezas al ser las imágenes de diferente tamaño se veían muy mal.
const elegirRompecabezas = (evento) => {
	switch (evento.target.id) {
		case 'principal':
			cambiarAlturaPuzzle(120);
			return 0;
		case 'teletubbies':
			cambiarAlturaPuzzle(133);
			return 1;
		default:
			cambiarAlturaPuzzle(200);
			return 2;
	}
};

//He tenido que usar estilo en línea ya que es necesario en este caso.
const cambiarAlturaPuzzle = (altura) => {
	const soltables = document.getElementById('soltables');
	soltables.style.gridTemplateRows = `repeat(3, ${altura}px)`;

	const soltablesCeldas = soltables.getElementsByClassName('soltable');
	for (let i = 0; i < soltablesCeldas.length; i++) {
		soltablesCeldas[i].style.height = `${altura}px`;
	}

	const imagenesSoltables = soltables.getElementsByTagName('img');
	for (let i = 0; i < imagenesSoltables.length; i++) {
		imagenesSoltables[i].style.height = `${altura}px`;
	}
};

export { rompeCabezasInicial, borrarPiezasSoltable, borrarPiezas, comprobarPuzzle, elegirRompecabezas };
