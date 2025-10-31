"use strict";
//Imports de funciones de la biblioteca.
import { posicionElemento } from "../../biblioteca.js";
import { ocultarInformacion } from "../../biblioteca.js";

let posicion = 0;

const mostrarInfoPestanyas = (evento) => {
	posicion = 0;
	const elemento = evento.target;
	if (elemento.classList.contains("pestanya")) {
		//Calculamos la posición de la pestaña.
		posicion = posicionElemento(elemento, posicion);
		const info = document.getElementsByClassName("informacion");
		if (posicion < info.length) {
			ocultarInformacion(info);
			//Quitamos la clase "ocultar" a la información de la misma posición que la pestaña seleccionada para mostrarla.
			info[posicion].classList.remove("ocultar");

			// Si no encontramos información para la pestaña seleccionado creamos información de error.
		} else {
			ocultarInformacion(info);
			//Añadimos un nuevo div de información para la pestaña que no tiene.
			document.getElementsByClassName("info")[0].insertAdjacentHTML(
				"beforeend",
				`<div class="informacion">
					ERROR!!! No se ha encontrado ninguna información para la pestaña "${elemento.innerText}". <br> Por favor. Añada información para esta pestaña.</br>
				</div>`
			);
		}
	}
};

export { mostrarInfoPestanyas };
