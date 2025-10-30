'use strict';

const mediaNumeros = function () {
	if (arguments.length === 0) {
		console.log('No se han pasado números.');
		return;
	}

	let suma = 0;

	for (let i = 0; i < arguments.length; i++) {
		if (isNaN(arguments[i]) || arguments[i] < 0) {
			console.log(`Todos los números deben ser números enteros positivos o cero.`);
		}
		suma += arguments[i];
	}

	const media = suma / arguments.length;
	console.log(`La media aritmética de los números es ${media}`);
};

export { mediaNumeros };
