'use script';

function imprimirObjeto(objeto) {
	let texto = 'Objeto: \n';
	for (let clave in objeto) {
		let tipoObjeto = typeof objeto[clave];

		//Usamos Array.isArray para comprobar que el valor del objeto es array
		if (Array.isArray(objeto[clave])) {
			tipoObjeto = 'array';
			//Usamos === para comprobar que el valor del objeto es "function"
		} else if (typeof objeto[clave] === 'function') {
			tipoObjeto = 'función';
		}
		//Encadenamos el texto para imprimirlo por consola
		texto += `- La clave es ${clave}, el valor es "${objeto[clave]}" y es del tipo ${tipoObjeto}.\n`;
	}
	console.log(texto);
}

export { imprimirObjeto };
