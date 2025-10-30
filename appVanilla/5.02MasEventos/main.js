"use strict";

//imports
import { mostrarInfoPares } from "./biblioteca/Ejercicio1.js";
import { mostrarInfoPestanyas } from "./biblioteca/Ejercicio2.js";

window.onload = () => {
	//Ejercicio1
	document.firstElementChild.addEventListener(
		"click",
		(evento) => {
			mostrarInfoPares(evento);
		},
		false
	);

	//Ejercicio2
	document.lastElementChild.addEventListener(
		"click",
		(evento) => {
			mostrarInfoPestanyas(evento);
		},
		false
	);
};
