"use strict";

//imports
import {
	borrarPiezas,
	borrarPiezasSoltable,
	rompeCabezasInicial,
	comprobarPuzzle,
} from "./biblioteca/Ejercicio1.js";
import { cargarImagenes } from "../biblioteca.js";

window.onload = () => {
	const imagenes = [
		cargarImagenes("./img/inicial/", 9),
		/* cargarImagenes("./img/easy/", 9),
		cargarImagenes("./img/medium/", 9),
		cargarImagenes("./img/hard/", 9),
		cargarImagenes("./img/imposible/", 9), */
	];

	rompeCabezasInicial(imagenes[0]);

	const rompecabezas = document.getElementById("rompecabezas");
	const soltable = document.getElementById("soltables");

	rompecabezas.addEventListener(
		"dragstart",
		(evento) => {
			evento.dataTransfer.setData("identificador", evento.target.id);
		},
		"false"
	);

	rompecabezas.addEventListener(
		"dragover",
		(evento) => {
			evento.preventDefault();
		},
		"false"
	);

	rompecabezas.addEventListener(
		"drop",
		(evento) => {
			evento.preventDefault();
			rompecabezas.appendChild(
				document.getElementById(evento.dataTransfer.getData("identificador"))
			);
		},
		"false"
	);

	soltable.addEventListener(
		"dragstart",
		(evento) => {
			evento.dataTransfer.setData("identificador", evento.target.id);
		},
		"false"
	);

	soltable.addEventListener(
		"dragover",
		(evento) => {
			evento.preventDefault();
		},
		"false"
	);

	soltable.addEventListener(
		"drop",
		(evento) => {
			evento.preventDefault();
			if (evento.target.classList.contains("soltable")) {
				evento.target.appendChild(
					document.getElementById(evento.dataTransfer.getData("identificador"))
				);
			}
			const piezas = rompecabezas.children;
			let completo = true;
			for (let i = 0; i < piezas.length; i++) {
				if (piezas[i].children.length !== 0) {
					completo = false;
					break;
				}
			}

			if (completo) {
				comprobarPuzzle(piezas);
			}
		},
		"false"
	);

	document.getElementById("reiniciar").addEventListener(
		"click",
		() => {
			borrarPiezasSoltable(soltable);
			borrarPiezas(rompecabezas);
			rompeCabezasInicial(imagenes[0]);
		},
		"false"
	);
};
