'use strict';

const guardarLocalStorage = (misiones) => {
	localStorage.setItem('misiones', JSON.stringify(misiones));
};

const obtenerLocalStorage = () => {
	let datos = localStorage.getItem('misiones') ? JSON.parse(localStorage.getItem('misiones')) : [];
	return datos;
};

const traerDatos = async (url) => {
	try {
		let respuesta = await fetch(url);
		if (respuesta.ok) {
			let datos = await respuesta.json();
			return datos;
		} else {
			throw new Error('No se han podido traer los datos de la api.');
		}
	} catch (error) {
		throw error;
	}
};

const traerMuchosDatos = async (urls) => {
	try {
		let promesas = urls.map((url) => {
			return traerDatos(url);
		});
		let resultado = await Promise.allSettled(promesas);
		let datos = resultado.map((r) => {
			return r.value;
		});
		return datos;
	} catch (error) {
		throw error;
	}
};

const resetearMisionesLocalStorage = () => {
	localStorage.removeItem('misiones');
};

const eliminarMision = (id, misiones) => {
	let misionesFiltradas = misiones.filter((mision) => {
		return mision.id !== id;
	});
	if (misionesFiltradas.length === 0) {
		resetearMisionesLocalStorage();
	} else {
		localStorage.setItem('misiones', JSON.stringify(misionesFiltradas));
	}
};

const pintarApi = (pelis, listaPeli) => {
	listaPeli.innerHTML = '';
	if (pelis.length > 0) {
		let plantilla = '';
		for (let peli of pelis) {
			plantilla += `<p id="${peli.id}">${peli.titulo}</p>`;
		}
		listaPeli.innerHTML = plantilla;
	}
};

const pintarPeliDetalle = (peli, lista) => {
	if (peli) {
		lista.innerHTML = `
			<div>
				<h2>${peli.titulo}</h2>
				<p>Año: ${peli.año}</p>
				<p>Director: ${peli.director}</p>
				<button value="${peli.id}">Cargar Personajes</button>
			</div>
		`;
	}
};
const pintarPersonajes = (personajes, peliDetalle) => {
	let plantilla = '';
	for (let p of personajes) {
		plantilla += `
			<div id="${p.id}">
				<h2>${p.nombre}</h2>
				<p>Rol: ${p.rol}</p>
				<p>Planeta: ${p.planeta}</p>
			</div>
		`;
	}
	peliDetalle.insertAdjacentHTML('beforeend', plantilla);
};

export {
	guardarLocalStorage,
	obtenerLocalStorage,
	traerDatos,
	traerMuchosDatos,
	resetearMisionesLocalStorage,
	eliminarMision,
	pintarApi,
	pintarPeliDetalle,
	pintarPersonajes,
};
