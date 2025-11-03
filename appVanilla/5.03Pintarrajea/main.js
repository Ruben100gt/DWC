"use strict";

//imports
import { generarTabla } from "./biblioteca/Ejercicio1.js";

window.onload = () => {
	generarTabla();

	document.getElementById("tabla").addEventListener(
		"mousedown",
		(evento) => {
			//mostrarInfoPares(evento);
		},
		false
	);
};
