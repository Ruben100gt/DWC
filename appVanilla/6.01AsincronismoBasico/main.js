"use strict";

//imports

window.onload = () => {
	const promesa = new Promise((resolver, rechazar) => {
		setTimeout(() => {
			const numero = Math.floor(Math.random() * 101);
			if (numero % 2 === 0) {
				resolver(numero);
			} else {
				rechazar(new Error(`El número es impar: ${numero}`));
			}
		}, 2000);
	});

	promesa
		.then((datos) => {
			console.log(datos);
		})
		.catch((error) => {
			console.log(error.message);
		})
		.finally(() => {
			console.log("Proceso asincrono terminado.");
		});
};
