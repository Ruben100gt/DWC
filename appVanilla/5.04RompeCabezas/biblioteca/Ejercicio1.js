"use strict";

import { desordenarArray } from "../../biblioteca.js";

const rompeCabezasInicial = (imagenes) => {
	const nuevasImagenes = desordenarArray(imagenes);
	const tabla = document.getElementById("rompecabezas");
	for (let i = 0; i < nuevasImagenes.length; i++) {
		tabla.insertAdjacentHTML(
			"beforeend",
			`<img id=${i} class="pieza" src="${nuevasImagenes[i]}"></img>`
		);
	}
};

const borrarPiezasSoltable = (soltable) => {
	let tablero = soltable.children;
	for (let a of tablero) {
		a.innerHTML = "";
	}
};

const borrarPiezas = (rompecabezas) => {
	rompecabezas.innerHTML = "";
};

const comprobarPuzzle = (piezas) => {
	let correcto = true;

	for (let i = 0; i < piezas.length; i++) {
		if (piezas[i].children.length === 0) {
			correcto = false;
			break;
		}
		const idImagen = parseInt(piezas[i].children[0].id);
		const idSoltable = parseInt(soltables.children[i].id); // id de la soltable: del 10 al 18
		if (idImagen + 9 !== idSoltable) {
			correcto = false;
			break;
		}
	}

	if (correcto) {
		document
			.getElementById("ganar")
			.insertAdjacentHTML(
				"beforeend",
				"¡Has ganado! Has completado el puzzle."
			);
	}
};

export {
	rompeCabezasInicial,
	borrarPiezasSoltable,
	borrarPiezas,
	comprobarPuzzle,
};
