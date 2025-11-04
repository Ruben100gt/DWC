"use strict";

const generarTabla = () => {
	const tabla = document.getElementById("tabla");
	for (let i = 1; i <= 60; i++) {
		tabla.insertAdjacentHTML(
			"beforeend",
			`<tr id="fila${i}" class="fila"> </tr>`
		);
		const fila = document.getElementById(`fila${i}`);
		for (let j = 1; j <= 60; j++) {
			fila.insertAdjacentHTML(
				"beforeend",
				`<td id="columna${j}" class="columna"> </td>`
			);
		}
	}
};

const seleccionarColor = (evento, color) => {
	color = evento.target.id;
	return color;
};

const pintarCelda = (evento, color) => {
	evento.target.style.backgroundColor = color;
};

const reiniciarTabla = () => {
	const tabla = document.getElementById("tabla").children;
	for (let i = 0; i < tabla.length; i++) {
		tabla[i].classList.add("reiniciar");
	}
};

export { generarTabla, seleccionarColor, pintarCelda, reiniciarTabla };
