'use strict';

const cargarLocalStorage = async (url) => {
	try {
		let planetas = localStorage.getItem('planetas') ? JSON.parse(localStorage.getItem('planetas')) : [];
		if (planetas.length === 0) {
			planetas = await traerDatos(url);
			guardarPlanetas(planetas);
		}
		return planetas;
	} catch (error) {
		throw error;
	}
};

const traerDatos = async (url) => {
	try {
		let datos = await fetch(url);
		if (datos.ok) {
			const resultado = await datos.json();
			if (resultado.results) {
				return resultado.results;
			}
			return resultado;
		} else {
			throw new Error('No se han podido obtener los datos de la api.');
		}
	} catch (error) {
		throw error;
	}
};

const guardarPlanetas = (planetas) => {
	localStorage.setItem('planetas', JSON.stringify(planetas));
};

export { cargarLocalStorage, traerDatos, guardarPlanetas };
