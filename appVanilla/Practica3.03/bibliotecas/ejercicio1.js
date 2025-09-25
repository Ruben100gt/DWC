"use strict";

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
	};
};

export { creaCurso };
