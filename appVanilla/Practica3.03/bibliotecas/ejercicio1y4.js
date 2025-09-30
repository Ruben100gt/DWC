'use strict';

const creaCurso = (nom, any, desc) => {
	//Comprobamos que tiene descripción
	if (typeof desc == `undefined`) {
		//Si no tiene descripción le asignamos una por defecto (para que no sea undefined)
		desc = `No tiene descripción.`;
	}
	//Devolvemos el curso
	return {
		nombre: nom,
		anyo: any,
		descripcion: desc,
		alumnado: [],
		//Método del ejercicio 4
		matricular: function (discente) {
			// Utilizamos ... para copiar el array y añadir el nuevo discente al final
			this.alumnado = [...this.alumnado, discente];
		},
	};
};

export { creaCurso };
