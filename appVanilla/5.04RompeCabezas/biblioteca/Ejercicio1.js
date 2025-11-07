"use strict";

const rompeCabezasInicial = (imagenes) => {
	const tabla = document.getElementById("rompecabezas");
	for (let i = 0; i < imagenes.lenght; i++) {
		tabla.insertAdjacentHTML(
			"beforeend",
			`<img id=${i} src="${imagenes[i]}"></img>`
		);
	}
};

export { rompeCabezasInicial };
