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

export { generarTabla };
