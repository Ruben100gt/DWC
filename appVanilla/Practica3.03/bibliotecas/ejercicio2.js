"use strict";

const mostrarCurso = (curso) => {
	//Creamos la variable texto para encadenar el mensaje
	let texto = ``;
	for (let clave in curso) {
		//Comprobamos que el curso tenga la clave
		if (curso.hasOwnProperty(clave)) {
			//Encadenamos el texto para imprimirlo por consola
			texto += `-La clave es ${clave}, el valor es "${
				curso[clave]
			}" y es del tipo ${typeof curso[clave]}\n`;
		}
	}
	console.log(texto);
};

export { mostrarCurso };
