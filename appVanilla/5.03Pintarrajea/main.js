"use strict";

//imports
import { generarTabla } from "./biblioteca/Ejercicio1.js";
import { seleccionarColor } from "./biblioteca/Ejercicio1.js";
import { pintarCelda } from "./biblioteca/Ejercicio1.js";
import { reiniciarTabla } from "./biblioteca/Ejercicio1.js";
import { colorAleatorio } from "../biblioteca.js";

window.onload = () => {
	const tabla = document.getElementById("tabla");
	const rgb = document.getElementById("rgb");
	let color = "black";
	let pintar = false;
	generarTabla();

	rgb.addEventListener("change", () => {
		color = rgb.value;
	});

	document
		.getElementById("seleccionar-color")
		.addEventListener("click", (evento) => {
			color = seleccionarColor(evento, color);
		});

	tabla.addEventListener(
		"mousedown",
		(evento) => {
			pintar = true;
			pintarCelda(evento, color);
		},
		false
	);

	tabla.addEventListener(
		"mouseover",
		(evento) => {
			if (pintar) {
				pintarCelda(evento, color);
			}
		},
		false
	);

	document.addEventListener(
		"mouseup",
		() => {
			pintar = false;
		},
		false
	);

	document.getElementById("reiniciar").addEventListener(
		"click",
		() => {
			reiniciarTabla();
		},
		false
	);

	document.getElementById("aleatorio").addEventListener(
		"click",
		() => {
			color = colorAleatorio();
		},
		false
	);
};
