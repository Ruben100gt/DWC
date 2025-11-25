import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Discos.css';

const InsertarDiscos = ({ listaDiscos, setListaDiscos }) => {
	const navegar = useNavigate();

	const formulario = useRef();

	const infoFormularioInicial = {
		nombre: '',
		caratula: '',
		artista: '',
		anyo: '',
		genero: '',
		localizacion: '',
		prestado: false,
	};

	const erroresInicial = {
		nombre: false,
		artista: false,
		anyo: false,
		genero: false,
		localizacion: false,
		prestado: false,
	};

	const [datosFormulario, setDatosFormulario] = useState(infoFormularioInicial);
	const [erroresCampos, setErroresCampos] = useState(erroresInicial);
	const [erroresTexto, setErroresTexto] = useState([]);

	const enviarFormulario = () => {
		const id = crypto.randomUUID();
		let datos = recogerDatos(datosFormulario, id);
		if (validarFormulario(datos, formulario)) {
			const discosFormulario = listaDiscos || [];
			const nuevaLista = [...discosFormulario, datos];
			guardarFormulario(nuevaLista);
			setDatosFormulario(infoFormularioInicial);
		}
	};

	const actualizarDatos = (evento) => {
		if (evento.target.name === 'prestado') {
			setDatosFormulario({ ...datosFormulario, prestado: evento.target.checked });
		} else {
			setDatosFormulario({
				...datosFormulario,
				[evento.target.name]: evento.target.value,
			});
		}
	};

	const recogerDatos = (formulario, id) => {
		return {
			id: id,
			nombre: formulario.nombre,
			caratula: formulario.caratula,
			artista: formulario.artista,
			anyo: formulario.anyo,
			genero: formulario.genero,
			localizacion: formulario.localizacion,
			prestado: formulario.prestado.checked,
		};
	};

	const validarFormulario = (datosForm, formulario) => {
		let erroresTemp = [];

		if (!validarNombre(datosForm.nombre)) {
			erroresTemp = [...erroresTemp, 'Error en el nombre, debe tener mínimo 5 caracteres (obligatorio).'];
		}

		if (!validarArtista(datosForm.artista)) {
			erroresTemp = [...erroresTemp, 'Error en el grupo/interprete, debe tener mínimo 5 caracteres (obligatorio).'];
		}

		if (!validarAnyo(datosForm.anyo)) {
			erroresTemp = [...erroresTemp, 'Error en el año, debe tener mínimo 4 números.'];
		}

		if (!validarGenero(datosForm.genero)) {
			erroresTemp = [...erroresTemp, 'Error en el genero, debe tener algún genero.'];
		}

		if (!validarLocalizacion(datosForm.localizacion)) {
			erroresTemp = [...erroresTemp, 'Error la localización, debe seguir el formato ES-001AA.'];
		}

		if (!erroresTemp.length) {
			setErroresCampos(erroresInicial);
			setErroresTexto([]);
			return true;
		} else {
			setErroresCampos({
				nombre: !validarNombre(datosForm.nombre),
				artista: !validarArtista(datosForm.artista),
				anyo: !validarAnyo(datosForm.anyo),
				genero: !validarGenero(datosForm.genero),
				localizacion: !validarLocalizacion(datosForm.localizacion),
				prestado: false,
			});
			setErroresTexto(erroresTemp);
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
		setListaDiscos(datos);
		setErroresCampos(erroresInicial);
		setErroresTexto([]);
	};

	return (
		<>
			<form ref={formulario}>
				<fieldset id="discos">
					<legend>Almacenar discos.</legend>
					<br />
					<label htmlFor="nombre">Nombre:</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						value={datosFormulario.nombre}
						onChange={actualizarDatos}
						className={erroresCampos.nombre ? 'error' : ''}
						placeholder="Nombre del disco."
						autoFocus
						required
					/>
					<br />
					<br />
					<label htmlFor="caratula">Carátula:</label>
					<input
						type="text"
						id="caratula"
						name="caratula"
						value={datosFormulario.caratula}
						onChange={actualizarDatos}
						className={erroresCampos.caratula ? 'error' : ''}
						placeholder="URL de la carátula del disco."
					/>
					<br />
					<br />
					<label htmlFor="artista">Grupo música/interprete:</label>
					<input
						type="text"
						id="artista"
						name="artista"
						value={datosFormulario.artista}
						onChange={actualizarDatos}
						className={erroresCampos.artista ? 'error' : ''}
						placeholder="Grupo o artista del disco."
						required
					/>
					<br />
					<br />
					<label htmlFor="anyo">Año de publicación:</label>
					<input
						type="number"
						id="anyo"
						name="anyo"
						value={datosFormulario.anyo}
						onChange={actualizarDatos}
						className={erroresCampos.anyo ? 'error' : ''}
					/>
					<br />
					<br />
					<label htmlFor="genero">Géneros del disco:</label>
					<select
						id="genero"
						name="genero"
						value={datosFormulario.genero}
						onChange={actualizarDatos}
						className={erroresCampos.genero ? 'error' : ''}
					>
						<option value=""></option>
						<option value="pop">Pop</option>
						<option value="rock">Rock</option>
						<option value="rap">Rap</option>
						<option value="jazz">Jazz</option>
						<option value="punk">Punk</option>
						<option value="electronica">Electrónica</option>
						<option value="clasico">Clásico</option>
						<option value="metal">Metal</option>
						<option value="regueton">Reguetón</option>
					</select>
					<br />
					<br />
					<label htmlFor="localizacion">Localización formato (ES-001AA):</label>
					<input
						type="text"
						id="localizacion"
						name="localizacion"
						value={datosFormulario.localizacion}
						onChange={actualizarDatos}
						className={erroresCampos.localizacion ? 'error' : ''}
						placeholder="Localización del disco."
					/>
					<br />
					<br />
					<label htmlFor="prestado">Prestado:</label>
					<input
						type="checkbox"
						id="prestado"
						name="prestado"
						checked={datosFormulario.prestado}
						onChange={actualizarDatos}
						className={erroresCampos.prestado ? 'error' : ''}
					/>
					<br />
					<br />
					<div className={erroresTexto.length > 0 ? 'error' : ''}>
						{erroresTexto.map((e) => (
							<p key={crypto.randomUUID()} className="errores">
								{e}
							</p>
						))}
					</div>
					<br />
					<input type="button" id="botonEnviar" value="Enviar" onClick={enviarFormulario} />
					<input type="button" id="botonMostrar" value="Mostrar" onClick={() => navegar('/discos')} />
				</fieldset>
			</form>
		</>
	);
};

export default InsertarDiscos;
