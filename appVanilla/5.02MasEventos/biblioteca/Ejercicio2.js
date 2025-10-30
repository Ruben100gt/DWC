"use strict";

let posicion = 0;

const mostrarInfoPestanyas = (evento) => {
	posicion = 0;
	const elemento = evento.target;
	if (elemento.classList.contains("pestanya")) {
		posicionPrestanya(elemento);
		const info = document.getElementsByClassName("informacion");
		for (let i = 0; i < 3; i++) {
			if (i === posicion) {
				info[i].classList.remove("ocultar");
			} else {
				info[i].classList.add("ocultar");
			}
		}
	}
};

const posicionPrestanya = (elemento) => {
	const pestanyaAnterior = elemento.previousElementSibling;
	if (pestanyaAnterior) {
		posicion++;
		posicionPrestanya(pestanyaAnterior);
	}
};

export { mostrarInfoPestanyas };
