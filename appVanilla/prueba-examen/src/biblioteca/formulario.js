'use strict';

let error = '';

const errores = {
	nombre: 'El nombre debe tener 5 o más caracteres.',
	prioridad: 'Debe seleccionar una prioridad.',
	equipo: 'Debe seleccionar un equipo.',
	planeta: 'Debe seleccionar un planeta.',
	url: 'Debe añadir una url válida.',
};

const datosFormulario = (formulario) => {
	return {
		id: crypto.randomUUID(),
		nombre: formulario.titulo.value,
		prioridad: datosPrioridad(formulario.prioridad),
		equipo: datosEquipo(formulario.equipo),
		planeta: datosPlaneta(formulario[7]),
		url: formulario.url_imagen.value,
	};
};

const datosPrioridad = (prioridad) => {
	for (let p of prioridad) {
		if (p.checked) {
			return p.value;
		}
	}
	return '';
};

const datosEquipo = (equipo) => {
	let datos = [];
	for (let e of equipo) {
		if (e.checked) {
			datos = [...datos, e.value];
		}
	}
	return datos;
};

const datosPlaneta = (planeta) => {
	return planeta.value;
};

const insertarDivMensajes = (div) => {
	div.insertAdjacentHTML('beforebegin', `<div id="mensaje"></div>`);
	return document.getElementById('mensaje');
};

const validarDatos = (datos) => {
	error = [];
	let valido = true;
	if (!validarNombre(datos.nombre)) {
		error += errores.nombre;
		error += '</br>';
		valido = false;
	}
	if (datos.prioridad === '') {
		error += errores.prioridad;
		error += '</br>';
		valido = false;
	}
	if (datos.equipo.length === 0) {
		error += errores.equipo;
		error += '</br>';
		valido = false;
	}
	if (datos.planeta === '') {
		error += errores.planeta;
		error += '</br>';
		valido = false;
	}
	if (datos.url === '') {
		error += errores.url;
		error += '</br>';
		valido = false;
	}
	if (valido) {
		return true;
	} else {
		return false;
	}
};

const validarNombre = (nombre) => {
	if (nombre !== '' && /.{5,}/.test(nombre)) {
		return true;
	} else {
		return false;
	}
};

const mensajeError = (div) => {
	div.innerHTML = `<p class="error">${error}</p>`;
};

const mensajeCorrecto = (div) => {
	div.innerHTML = '<p>El formulario se ha enviado correctamente.</p>';
};

const limpiarFormulario = (formulario) => {
	formulario.reset();
};

const limpiarMensajes = (div) => {
	div.innerHTML = '';
};

const pintarMisiones = (div, misiones) => {
	let mensaje = '<div>';
	for (let m of misiones) {
		mensaje += `<div>`;
		mensaje += `nombre : ${m.nombre}`;
		mensaje += `<button id="${m.id}" value="eliminar">X</button>`;
		mensaje += '</div>';
	}
	mensaje += '</div>';
	div.innerHTML = mensaje;
};

const filtrarMisiones = (dato, misiones) => {
	let filtro = misiones.filter((mision) => {
		let nombre = mision.nombre;
		return nombre.includes(dato);
	});
	return filtro;
};

export {
	datosFormulario,
	insertarDivMensajes,
	mensajeError,
	mensajeCorrecto,
	limpiarFormulario,
	validarDatos,
	limpiarMensajes,
	pintarMisiones,
	filtrarMisiones,
};
