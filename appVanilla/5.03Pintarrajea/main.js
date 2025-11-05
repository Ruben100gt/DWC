"use strict";

//imports
import { generarTabla } from "./biblioteca/Ejercicio1.js";
import { seleccionarColor } from "./biblioteca/Ejercicio1.js";
import { pintarCelda } from "./biblioteca/Ejercicio1.js";
import { reiniciarTabla } from "./biblioteca/Ejercicio1.js";

window.onload = () => {
	let color = "black";
	let rgb = false;
	let pintar = false;
	generarTabla();

	document.getElementById("rgb").addEventListener("input", (evento) => {
		rgb = true;
	});

	document
		.getElementById("seleccionarColor")
		.addEventListener("click", (evento) => {
			rgb = false;
			color = seleccionarColor(evento, color);
		});

	document.getElementById("tabla").addEventListener(
		"mousedown",
		() => {
			if (rgb) {
				color = document.getElementById("rgb").value;
			}
			pintar = true;
		},
		false
	);

	document.getElementById("tabla").addEventListener(
		"mouseover",
		(evento) => {
			if (pintar) {
				pintarCelda(evento, color);
			}
		},
		false
	);

	document.getElementById("tabla").addEventListener(
		"mouseup",
		() => {
			pintar = false;
		},
		false
	);

	document.getElementById("boton").addEventListener(
		"click",
		() => {
			reiniciarTabla();
		},
		false
	);
};
