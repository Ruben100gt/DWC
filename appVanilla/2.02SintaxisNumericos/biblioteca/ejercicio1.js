'use strict';

const mesNumero = (numero) => {
	if (isNaN(numero)) {
		console.log(`El dato debe ser un número.`);
	}

	let meses = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	];

	if (numero < 1 || numero > 12) {
		console.log(`El número debe estar entre 1 y 12.`);
	}

	console.log(`El mes que corresponde al número ${numero} es ${meses[numero - 1]}.`);
};

export { mesNumero };
