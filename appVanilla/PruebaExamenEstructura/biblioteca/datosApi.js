'use strict';

let planetasPropios = [];
localStorage.getItem('planetas')
	? JSON.parse(localStorage.getItem('planetas'))
	: JSON.stringify(localStorage.setItem('planetas', planetasPropios));

const traerDatos = async (url) => {
	try {
		let respuesta = await fetch(url);

		if (respuesta.ok) {
			respuesta = await respuesta.json();
			return respuesta.results;
		} else {
			throw new Error('Se ha producido un error al traer los datos.');
		}
	} catch (error) {
		throw error;
	}
};

const traerMuchosDatos = async (ulrs) => {
	let promesas = await ulrs.map((url) => {
		traerDatos(url);
	});
	let promesasHechas = await Promise.allSettled(promesas);
	return promesasHechas;
};

const obtenerPlanetas = () => {};

export { traerDatos, planetasPropios, traerMuchosDatos };
