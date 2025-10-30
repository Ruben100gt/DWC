"use strict";

const mostrarInfoPares = (evento) => {
	const elemento = evento.target;
	if (elemento.classList.contains("impar")) {
		elemento.nextElementSibling.classList.toggle("ocultar");
	}
};

export { mostrarInfoPares };
