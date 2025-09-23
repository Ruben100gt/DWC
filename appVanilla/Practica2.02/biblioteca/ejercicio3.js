'use strict';

const multiplosDeTres = (num) => {
	if (isNaN(num) || num < 1) {
		console.log(`El número debe ser positivo.`);
	} else {
		console.log(`Múltiplos de 3 hasta ${num}:`);
		for (let i = 1; i <= num; i++) {
			if (i % 3 === 0) console.log(i);
		}
	}
};

export { multiplosDeTres };
