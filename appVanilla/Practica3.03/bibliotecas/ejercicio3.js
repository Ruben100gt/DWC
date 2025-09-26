"use strict";
const discente = (id, nom, ape, afi, [notas]) => {
	return {
		id: id,
		nombre: nom,
		apellido: ape,
		aficiones: [afi],
		notas: {
			primera: notas[0],
			segunda: notas[1],
			tercera: notas[2],
		},
		calcularMedia: function () {
			return this.notas.primera + this.notas.segunda + this.notas.tercera;
		},
		imprimirAficiones: function () {
			let texto = "Aficiones:\n";
			for (let afic in this.aficiones) {
				if (this.aficiones.hasOwnProperty(afic)) {
					//Encadenamos el texto para imprimirlo por consola
					texto += `"${this.aficiones[afic]}"\n`;
				}
			}
			return texto;
		},
		imprimirInforme: function () {
			let texto = "Informe completo:\n";

			return texto;
		},
	};
};

export { discente };
