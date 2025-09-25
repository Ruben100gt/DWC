"use strict";
const discente = (id, nom, ape, afi, prim, seg, ter) => {
	return {
		id: id,
		nombre: nom,
		apellido: ape,
		aficiones: [afi],
		notas: {
			primera: prim,
			segunda: seg,
			tercera: ter,
		},
		calcularMedia: function () {
			return notas.primera + notas.segunda + notas.tercera;
		},
		imprimirAficiones: function () {
			texto = "Aficiones:\n";
			for (let afic in aficiones) {
				if (this.aficiones.hasOwnProperty(afic)) {
					//Encadenamos el texto para imprimirlo por consola
					texto += `"${aficiones[afic]}"\n`;
				}
			}
			return texto;
		},
		imprimirInforme: function () {
			texto = "Informe completo:\n";
		},
	};
};

export { discente };
