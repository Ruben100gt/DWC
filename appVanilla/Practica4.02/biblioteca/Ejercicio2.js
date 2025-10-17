"use strict";

const crearTabla = () => {
	document.body.insertAdjacentHTML("beforeend", '<table id="tabla"></table>');
	const tabla = document.getElementById("tabla");
	for (let i = 0; i < 10; i++) {
		tabla.insertAdjacentHTML("beforeend", `<tr id="fila${i}"></tr>`);
		const fila = document.getElementById(`fila${i}`);
		for (let j = 0; j < 10; j++) {
			fila.insertAdjacentHTML(
				"beforeend",
				`<th id="columna${j}">${j + 1 * (i * 10) + 1}</th>`
			);
		}
	}
};

export { crearTabla };
