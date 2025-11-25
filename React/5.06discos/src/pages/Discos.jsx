import React from "react";
import discos from "../json/discos.json";
import { useNavigate } from "react-router-dom";
import "./Discos.css";

const Discos = () => {
	const navegar = useNavigate();
	let haydiscos = false;
	if (discos.lenght) {
		haydiscos = true;
	} else {
		haydiscos = false;
	}

	//Funcion vanilla
	/* const recogerDatos = (formulario, id) => {
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
	}; */

	//Funcion vanilla
	/* const validarFormulario = (datosForm, formulario) => {
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
	}; */
	return (
		<>
			<h2>Listado de Discos:</h2>
			<div id="discosMostrados">
				<div id="busqueda">
					<input type="text" id="textoBuscar" placeholder="Busca por nombre." />
					<input type="button" id="botonBuscar" value="Buscar" />
					<input type="button" id="botonLimpiar" value="Limpiar" />
				</div>
				<hr />
				<div id="listadoDiscos"></div>
			</div>

			<div className="discos">
				{haydiscos ? (
					discos.discos.map((disco) => (
						<div className="disco" key={disco.id}>
							<img src={disco.cartelera} />
							<h3
								onClick={() => {
									navegar(`/detalledisco/${disco.id}`);
								}}
							>
								{disco.nombre}
								{disco.artista}
								{disco.genero}
							</h3>
						</div>
					))
				) : (
					<div>
						<h3>NO HAY DISCOS</h3>
						<p>Lo sentimos mucho. No hemos encontrado ningún disco.</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Discos;
