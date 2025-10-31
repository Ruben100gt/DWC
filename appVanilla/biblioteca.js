"use strict";

//Creamos "posicionFinal" ya que si solo usamos "posicionInicial" al terminar la recursividad y voler a los métodos anteriores pilla la "posicionInicial" sin los cambios.
let posicionFinal = 0;
const posicionElemento = (elemento, posicionInicial) => {
	posicionFinal = posicionInicial;
	const pestanyaAnterior = elemento.previousElementSibling;
	//Comprobamos si tiene un hermano delante.
	if (pestanyaAnterior) {
		posicionFinal++;
		posicionElemento(pestanyaAnterior, posicionFinal); //Usamos recursividad para comprobar cuantos hermanos tiene delante.
	}
	//Devolvemos la posición final del elemento.
	return posicionFinal;
};

// IMPORTANTE -> Se debe crear en el css ocultar (display: none;)
const ocultarInformacion = (elemento) => {
	for (let i = 0; i < elemento.length; i++) {
		elemento[i].classList.add("ocultar");
	}
};

export { posicionElemento, ocultarInformacion };
