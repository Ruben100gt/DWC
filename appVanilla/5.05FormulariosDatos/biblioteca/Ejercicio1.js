"use strict";

const recogerDatos = (formulario) => {
	return {
		nombre: formulario.nombre.value,
		caratula: formulario.caratula.value,
		artista: formulario.artista.value,
		anyo: formulario.anyo.value,
		genero: formulario.genero.value,
		localizacion: formulario.localizacion.value,
		prestado: formulario.prestado.value,
	};
};

const validarFormulario = (formulario) => {
	const datosForm = recogerDatos(formulario);
	let todoCorecto = true;
	let errores = [];

	//Hacer funcion que si no es required y no tiene nada (vacio) no entre a validar,
	if (!validarNombre(datosForm.nombre)) {
		todoCorecto = false;
		colorError(formulario.nombre);
		errores = [
			...errores,
			"Error en el nombre, debe tener mínimo 5 caracteres (obligatorio).",
		];
	}

	if (!validarArtista(datosForm.artista)) {
		todoCorecto = false;
		colorError(formulario.artista);
		errores = [
			...errores,
			"Error en el grupo/interprete, debe tener mínimo 5 caracteres (obligatorio).",
		];
	}

	if (!validarAnyo(datosForm.anyo)) {
		todoCorecto = false;
		colorError(formulario.anyo);
		errores = [...errores, "Error en el año, debe tener mínimo 4 números."];
	}

	if (!validarGenero(datosForm.genero)) {
		todoCorecto = false;
		colorError(formulario.genero);
		errores = [...errores, "Error en el nombre, debe tener"];
	}

	if (!validarLocalizacion(datosForm.localizacion)) {
		todoCorecto = false;
		colorError(formulario.localizacion);
		errores = [...errores, "Error en el nombre, debe tener"];
	}

	if (todoCorecto) {
		//guardarFormulario();
	} else {
		mostrarError(errores);
	}
};

const mostrarError = () => {};

const colorError = (nombre) => {
	nombre.classlist.add(error);
};

const validarNombre = (nombre) => {
	return /^.{5,}$/.test(nombre) && nombre !== "";
};

const validarArtista = (artista) => {
	return /^.{5,}$/.test(artista) && artista !== "";
};

const validarAnyo = (anyo) => {
	return /^[0-9]{4}$/.test(anyo);
};

const validarGenero = (genero) => {
	return genero !== "";
};

const validarLocalizacion = (localizacion) => {
	return /^ES-[0-9]{3}[A-Z]{2}$/.test(localizacion);
};

export { recogerDatos, validarFormulario };
