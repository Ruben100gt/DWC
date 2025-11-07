"use strict";

//imports
import { rompeCabezasInicial } from "./biblioteca/Ejercicio1.js";
import { cargarImagenes } from "../biblioteca.js";

window.onload = () => {
	const imagenes = [
		cargarImagenes("./img/inicial/"),
		cargarImagenes("./img/easy/"),
		cargarImagenes("./img/medium/"),
		cargarImagenes("./img/hard/"),
		cargarImagenes("./img/imposible/"),
	];

	rompeCabezasInicial(imagenes[0]);
};
