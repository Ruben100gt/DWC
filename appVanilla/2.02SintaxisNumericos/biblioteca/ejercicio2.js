'use strict';

const esPar = (num) => {
	console.log(`El número ${num} es`);
	console.log(num % 2 === 0 ? 'par' : 'impar');
};

const esPosNeg = (num) => {
	if (num === 0) console.log('cero');
	console.log(num > 0 ? 'positivo' : 'negativo');
};

const esPrim = (num) => {
	if (num <= 1) {
		console.log(`El número ${num} no es primo`);
	} else {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				console.log(`El número ${num} es primo`);
				return; //Ponemos return para que no siga y imprima que tampoco es primo
			}
		}
	}
	console.log(`El número ${num} no es primo`);
};

//Función Principal
const analisisNumerico = (num) => {
	if (isNaN(num)) {
		console.log(`El dato debe ser un número.`);
	} else {
		console.log(`Análisis del número ${num}:`);
		esPar(num), esPosNeg(num), esPrim(num);
	}
};

export { analisisNumerico };
