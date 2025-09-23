"use strict";

const creaCurso = (nom, any, desc) => {
	return {
		nombre: nom,
		anyo: any,
		descripcion: desc,
		alumnado: [],
	};
};

export { creaCurso };
