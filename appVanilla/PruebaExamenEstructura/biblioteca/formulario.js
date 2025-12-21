'use strict';

const mensajesErrores = {
	name: 'El nombre debe tener 5 o más caracteres.',
	climate: 'Debes seleccionar un clima',
	diameter: 'Debe tener almenos 1000km de diámetro.',
	imagen: 'Debe ser una URL válida.',
	elementos: 'Debe seleccionar almenos un elemento.',
	lunas: 'Debe seleccionar almenos una opción.',
};

let errores = [];

const patrones = {
	name: /.{5,}/,
	diameter: /^\d{4,}$/,
	imagen: /^https?:\/\//,
};

const obtenerDatosFormulario = (formulario) => {
	return {
		name: formulario[0].value,
		climate: formulario[1].value,
		diameter: formulario[2].value,
		imagen: formulario[3].value,
		elementos: obtenerElementos(formulario.elementos),
		lunas: obtenerLunas(formulario.lunas),
		habitable: formulario.habitable.checked,
	};
};

const obtenerElementos = (elementos) => {
	let elementosSeleccionasdos = [];
	for (let e of elementos) {
		if (e.checked) elementosSeleccionasdos = [...elementosSeleccionasdos, e.value];
	}
	return elementosSeleccionasdos;
};

const obtenerLunas = (lunas) => {
	let lunasSeleccionada = '';
	for (let e of lunas) {
		if (e.checked) lunasSeleccionada = e.value;
	}
	return lunasSeleccionada;
};

const validarFormulario = (formulario) => {
	errores = [];
	let valido = true;
	if (!validarNombre(formulario.name)) {
		errores = [...errores, mensajesErrores.name];
		valido = false;
	}
	if (formulario.climate === '') {
		errores = [...errores, mensajesErrores.climate];
		valido = false;
	}
	if (!validarDiametro(formulario.diameter)) {
		errores = [...errores, mensajesErrores.diameter];
		valido = false;
	}
	if (!validarImagen(formulario.imagen)) {
		errores = [...errores, mensajesErrores.imagen];
		valido = false;
	}
	if (formulario.elementos === '') {
		errores = [...errores, mensajesErrores.elementos];
		valido = false;
	}
	if (formulario.lunas === '') {
		errores = [...errores, mensajesErrores.lunas];
		valido = false;
	}
	return valido;
};

const validarNombre = (name) => {
	if (name === '' || !patrones.name.test(name)) {
		return false;
	}
	return true;
	// return name !== '' && patrones.name.test(name);
};

const validarDiametro = (diameter) => {
	if (diameter === '' || !patrones.diameter.test(diameter)) {
		return false;
	}
	return true;
	// return diameter !== '' && patrones.diameter.test(diameter);
};
const validarImagen = (imagen) => {
	if (imagen !== '' && !patrones.imagen.test(imagen)) {
		return false;
	}
	return true;
	// return imagen === '' && patrones.imagen.test(imagen);
};

const mostrarErrores = (info) => {
	let error = '';
	for (let e of errores) {
		error += e;
	}
	info.innerHTML = error;
	info.classList.remove('correcto');
	info.classList.add('error');
};

const mostrarMensajeCorrecto = (info) => {
	info.innerHTML = 'El formulario se ha enviado correctamente.';
	info.classList.remove('error');
	info.classList.add('correcto');
};

const borrarMensajes = (info) => {
	info.innerHTML = '';
	info.classList.remove('error');
	info.classList.remove('correcto');
};

const mostrarPlanetas = (datos, info) => {
	info.innerHTML = '';
	let planetas = '<div id="infoPlanetas">';
	for (let p of datos) {
		planetas += `<h3>${p.name} : ${p.value}</h3>`;
		planetas += `<p>${p.climate} : ${p.value}</p>`;
		planetas += `<p>${p.diameter} : ${p.value}</p>`;
		if (p.imagen) planetas += `<p>${p.imagen} : ${p.value}</p>`;
		if (p.elementos) planetas += `<p>${p.elementos} : ${p.value}</p>`;
		if (p.lunas) planetas += `<p>${p.lunas} : ${p.value}<p/>`;
		if (p.habitable) planetas += `<p>${p.habitable} : ${p.value}</p>`;
		planetas += `<button id="${p.name}"class="borrarPlaneta"></button>`;
	}
	planetas += '</div>';
	info.insertAdjacentHTML('beforeend', planetas);
};

const limpiarFormulario = (formulario) => {
	(formulario[0].value = ''), (formulario[1].value = ''), (formulario[2].value = ''), (formulario[3].value = '');
	for (let e of formulario.elementos) {
		if (e.checked) e.checked = false;
	}
	for (let e of formulario.lunas) {
		if (e.checked) e.checked = false;
	}
	formulario.habitable.checked = false;
};

const insertarContenedorMensaje = (formulario) => {
	let mensaje = formulario.lastElementChild.previousElementSibling;
	mensaje.insertAdjacentHTML('beforebegin', `<div id="mensaje"></div>`);
	return document.getElementById('mensaje');
};

export {
	obtenerDatosFormulario,
	validarFormulario,
	mostrarErrores,
	mostrarPlanetas,
	mostrarMensajeCorrecto,
	borrarMensajes,
	limpiarFormulario,
	insertarContenedorMensaje,
};
