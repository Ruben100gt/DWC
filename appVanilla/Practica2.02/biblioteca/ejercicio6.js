'use strict';

const suma = (a, b) => console.log(`Suma: ${a} + ${b} = ${a + b}`);

const resta = (a, b) => console.log(`Resta: ${a} - ${b} = ${a - b}`);

const multiplicacion = (a, b) => console.log(`Multiplicación: ${a} * ${b} = ${a * b}`);

const division = (a, b) => {
	if (b === 0) console.log('No se puede dividir entre 0');
	else console.log(`División: ${a} / ${b} = ${a / b}`);
};
const modulo = (a, b) => {
	if (b === 0) console.log('No se puede hacer el módulo de 0');
	else console.log(`Módulo: ${a} % ${b} = ${a % b}`);
};

const calculadora = (a, b, operador) => {
	if (isNaN(a) || isNaN(b)) {
		console.log('Ambos datos deben ser números');
	}
	if (!Number.isInteger(a) || !Number.isInteger(b)) {
		console.log('Ambos datos deben ser números');
	}
	if (operador === '+') suma(a, b);
	else if (operador === '-') resta(a, b);
	else if (operador === '*') multiplicacion(a, b);
	else if (operador === '/') division(a, b);
	else if (operador === '%') modulo(a, b);
	else console.log('Error: Operador no válido');
};

export { calculadora };
