'use strict';
const discente = (id, nom, ape, afi, not) => {
	return {
		id: id,
		nombre: nom,
		apellidos: ape,
		aficiones: afi,
		notas: {
			primera: not.primera,
			segunda: not.segunda,
			tercera: not.tercera,
		},
		calcularMedia: function () {
			return (this.notas.primera + this.notas.segunda + this.notas.tercera) / 3;
		},
		imprimirAficiones: function () {
			let texto = 'Aficiones:\n';
			for (let afic in this.aficiones) {
				//Comprobamos que tenga valor
				if (this.aficiones.hasOwnProperty(afic)) {
					//Encadenamos el texto para imprimirlo por consola
					texto += `"${this.aficiones[afic]}".\n`;
				}
			}
			console.log(texto);
		},
		imprimirInforme: function () {
			//Creamos la variable texto para encadenar el mensaje
			let texto = `Informe completo: \n`;
			texto += `-La clave es id, el valor es "${[this.id]}" y es del tipo ${typeof this.id}.\n`;
			texto += `-La clave es nombre, el valor es "${[this.nombre]}" y es del tipo ${typeof this.nombre}.\n`;
			texto += `-La clave es apellidos, el valor es "${[this.apellidos]}" y es del tipo ${typeof this.apellidos}.\n`;
			texto += `-La clave es aficiones, el valor es "${[this.aficiones]}" y es del tipo ${
				Array.isArray(this.aficiones) ? 'array' : typeof this.aficiones
			}.\n`;
			texto += `-La clave es notas, el valor "primera" vale ${this.notas.primera}, el valor "segunda" vale ${this.notas.segunda} y el valor "tercera" vale ${this.notas.tercera}.`;
			console.log(texto);
		},
	};
};

export { discente };
