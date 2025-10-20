"use strict";

const crearTabla = () => {
	document.body.insertAdjacentHTML("beforeend", '<table id="tabla"></table>');
	const tabla = document.getElementById("tabla");
	for (let i = 0; i < 10; i++) {
		tabla.insertAdjacentHTML("beforeend", `<tr id="fila${i}"></tr>`);
		const fila = document.getElementById(`fila${i}`);
		for (let j = 0; j < 10; j++) {
			let numero = j + i * 10 + 1;
			fila.insertAdjacentHTML(
				"beforeend",
				`<th id="columna${numero}">${numero}</th>`
			);
		}
	}
};

const numeroPrimo = () => {
	for (let i = 1; i <= 100; i++) {
		let primo = true;
		if (i <= 1) {
			primo = false;
		} else if (i === 2) {
			primo = true;
		}
		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				primo = false;
			}
		}
		if (primo) {
			const celda = document.getElementById(`columna${i}`);
			celda.classList.add("primo");
		}
	}
};

export { crearTabla, numeroPrimo };
