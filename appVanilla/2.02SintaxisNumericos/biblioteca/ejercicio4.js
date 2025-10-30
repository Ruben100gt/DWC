'use strict';

const potencia = (base, exponente) => {
	if (isNaN(base) || isNaN(exponente)) {
		console.log(`Los datos deben ser números.`);
	}

	let resultado = 1;
	let i = 0;

	while (i < exponente) {
		resultado *= base;
		i++;
	}

	console.log(`${base} elevado a la ${exponente} es ${resultado}`);
};

export { potencia };
