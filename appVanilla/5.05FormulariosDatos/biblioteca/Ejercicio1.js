'use strict';

const divErrores = document.getElementById('errores');

const recogerDatos = (formulario, id) => {
	return {
		id: id,
		nombre: formulario.nombre.value,
		caratula: formulario.caratula.value,
		artista: formulario.artista.value,
		anyo: formulario.anyo.value,
		genero: formulario.genero.value,
		localizacion: formulario.localizacion.value,
		prestado: formulario.prestado.checked,
	};
};

const validarFormulario = (datosForm, formulario) => {
	let errores = [];

	if (!validarNombre(datosForm.nombre)) {
		colorError(formulario.nombre, true);
		errores = [...errores, 'Error en el nombre, debe tener mínimo 5 caracteres (obligatorio).'];
	} else {
		colorError(formulario.nombre, false);
	}

	if (!validarArtista(datosForm.artista)) {
		colorError(formulario.artista, true);
		errores = [...errores, 'Error en el grupo/interprete, debe tener mínimo 5 caracteres (obligatorio).'];
	} else {
		colorError(formulario.artista, false);
	}

	if (!validarAnyo(datosForm.anyo)) {
		colorError(formulario.anyo, true);
		errores = [...errores, 'Error en el año, debe tener mínimo 4 números.'];
	} else {
		colorError(formulario.anyo, false);
	}

	if (!validarGenero(datosForm.genero)) {
		colorError(formulario.genero, true);
		errores = [...errores, 'Error en el genero, debe tener algún genero.'];
	} else {
		colorError(formulario.genero, false);
	}

	if (!validarLocalizacion(datosForm.localizacion)) {
		colorError(formulario.localizacion, true);
		errores = [...errores, 'Error la localización, debe seguir el formato ES-001AA.'];
	} else {
		colorError(formulario.localizacion, false);
	}

	if (!errores.length) {
		borrarError();
		return true;
	} else {
		mostrarError(errores);
		return false;
	}
};

const validarNombre = (nombre) => {
	return /^.{5,}$/.test(nombre) && nombre !== '';
};

const validarArtista = (artista) => {
	return /^.{5,}$/.test(artista) && artista !== '';
};

const validarAnyo = (anyo) => {
	return anyo == '' || /^[0-9]{4}$/.test(anyo);
};

const validarGenero = (genero) => {
	return genero !== '';
};

const validarLocalizacion = (localizacion) => {
	return localizacion == '' || /^ES-[0-9]{3}[A-Z]{2}$/.test(localizacion);
};

const guardarFormulario = (datos) => {
	localStorage.setItem('coleccionDiscos', JSON.stringify(datos));
	borrarError();
};

const borrarError = () => {
	divErrores.innerHTML = '';
	divErrores.classList.remove('error');
};

const mostrarError = (errores) => {
	divErrores.classList.add('error');
	divErrores.innerHTML = '';
	errores.forEach((e) => {
		divErrores.insertAdjacentHTML('beforeend', `<p class="errores">${e}</p>`);
	});
};

const colorError = (nombre, error) => {
	if (error) {
		nombre.classList.add('error');
	} else {
		nombre.classList.remove('error');
	}
};

const mostrarFormularios = (datos, mostrar) => {
	mostrar.innerHTML = '';

	datos.forEach((e) => {
		let contenido = '';
		if (e.nombre) contenido += `<p><strong>Nombre:</strong> ${e.nombre}</p>`;
		if (e.caratula) contenido += `<p><strong>Carátula:</strong> ${e.caratula}</p>`;
		if (e.artista) contenido += `<p><strong>Artista:</strong> ${e.artista}</p>`;
		if (e.anyo) contenido += `<p><strong>Año:</strong> ${e.anyo}</p>`;
		if (e.genero) contenido += `<p><strong>Género:</strong> ${e.genero}</p>`;
		if (e.localizacion) contenido += `<p><strong>Localización:</strong> ${e.localizacion}</p>`;
		if (e.prestado !== undefined) contenido += `<p><strong>Prestado:</strong> ${e.prestado}</p>`;

		//Boton eliminar
		//data-id lo he hecho con ayuda de chatgpt (no se me ocurre otra manera de como hacerlo)
		contenido += `<input type="button" class="botonEliminar" value="X" data-id="${e.id}" />`;

		mostrar.insertAdjacentHTML('beforeend', `<div>${contenido}</div>`);
	});
};

const buscarDiscos = (texto, discos) => {
	return discos.filter((d) => d.nombre.includes(texto));
};

export { recogerDatos, validarFormulario, mostrarFormularios, guardarFormulario, buscarDiscos };
