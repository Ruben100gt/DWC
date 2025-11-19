"use strict";

const divErrores = document.getElementById("errores");

const recogerDatos = (formulario) => {
	return {
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
		errores = [
			...errores,
			"Error en el nombre, debe tener mínimo 5 caracteres (obligatorio).",
		];
	} else {
		colorError(formulario.nombre, false);
	}

	if (!validarArtista(datosForm.artista)) {
		colorError(formulario.artista, true);
		errores = [
			...errores,
			"Error en el grupo/interprete, debe tener mínimo 5 caracteres (obligatorio).",
		];
	} else {
		colorError(formulario.artista, false);
	}

	if (!validarAnyo(datosForm.anyo)) {
		colorError(formulario.anyo, true);
		errores = [...errores, "Error en el año, debe tener mínimo 4 números."];
	} else {
		colorError(formulario.anyo, false);
	}

	if (!validarGenero(datosForm.genero)) {
		colorError(formulario.genero, true);
		errores = [...errores, "Error en el genero, debe tener algún genero."];
	} else {
		colorError(formulario.genero, false);
	}

	if (!validarLocalizacion(datosForm.localizacion)) {
		colorError(formulario.localizacion, true);
		errores = [
			...errores,
			"Error la localización, debe seguir el formato ES-001AA.",
		];
	} else {
		colorError(formulario.localizacion, false);
	}

	if (!errores.length) {
		console.log("no hay errores");
		borrarError();
		return true;
	} else {
		console.log(errores.length);
		console.log("hay errores");
		mostrarError(errores);
	}
};

const guardarFormulario = () => {
	//guardar formulario en localstorage
	//Borrar errores
};

const borrarError = () => {
	divErrores.innerHTML = "";
	divErrores.classList.remove("error");
};

const mostrarError = (errores) => {
	divErrores.classList.add("error");
	//Comprobar si errores (div) ya tiene errores, para reescribirlos y que no se acumulen.
	errores.forEach((e) => {
		divErrores.insertAdjacentHTML("beforeend", `<p class="errores">${e}<p>`);
	});
};

const colorError = (nombre, error) => {
	if (error) {
		nombre.classList.add("error");
	} else {
		nombre.classList.remove("error");
	}
};

const validarNombre = (nombre) => {
	return /^.{5,}$/.test(nombre) && nombre !== "";
};

const validarArtista = (artista) => {
	return /^.{5,}$/.test(artista) && artista !== "";
};

const validarAnyo = (anyo) => {
	return anyo == "" || /^[0-9]{4}$/.test(anyo);
};

const validarGenero = (genero) => {
	return genero !== "";
};

const validarLocalizacion = (localizacion) => {
	return localizacion == "" || /^ES-[0-9]{3}[A-Z]{2}$/.test(localizacion);
};

const mostrarFormularios = (datos) => {
	console.log("mostrar formulario");
	console.log(datos);
	const mostrar = document.getElementById("listadoDiscos");
	datos.forEach((e) => {
		mostrar.insertAdjacentHTML(
			"beforeend",
			`<div>
	<p>Nombre: ${e.nombre}</p>
	<p>Carátula: ${e.caratula}</p>
	<p>Artista: ${e.artista}</p>
	<p>Anyo: ${e.anyo}</p>
	<p>Género: ${e.genero}</p>
	<p>Localización: ${e.localizacion}</p>
	<p>Prestado: ${e.prestado}</p>
	</div>`
		);
	});
};

export {
	recogerDatos,
	validarFormulario,
	mostrarFormularios,
	guardarFormulario,
};
