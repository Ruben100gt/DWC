import React, { useContext, useState, useEffect } from 'react';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import fotoDefecto from '../assets/patitoFeo.jpg';
import './Perfil.css';

const Perfil = () => {
	const { usuario, nombrePerfil, fotoPerfil, descripcionPerfil, actualizarPerfil, rolUsuario } =
		useContext(contextoSesion);
	const [inputNombre, setInputNombre] = useState('');
	const [inputFoto, setInputFoto] = useState('');
	const [inputDescripcion, setInputDescripcion] = useState('');

	useEffect(() => {
		setInputNombre(nombrePerfil || '');
		setInputFoto(fotoPerfil || '');
		setInputDescripcion(descripcionPerfil || '');
	}, [nombrePerfil, fotoPerfil, descripcionPerfil]);

	const guardarCambios = (e) => {
		e.preventDefault();
		actualizarPerfil(inputNombre, inputFoto, inputDescripcion);
	};

	return (
		<div className="principal-contenedor">
			<section className="perfil-contenedor">
				<h2>Mi Perfil</h2>

				<div className="perfil-info-actual">
					<img
						src={fotoPerfil || fotoDefecto}
						alt="Foto de perfil"
						className="foto-perfil-grande"
						onError={(e) => {
							e.target.src = fotoDefecto;
						}}
					/>
					<div className="perfil-datos-basicos">
						<p>
							<strong>Email:</strong> {usuario?.email}
						</p>
						<p>
							<strong>Rol:</strong> {rolUsuario || 'Usuario'}
						</p>
					</div>
				</div>

				<form className="perfil-formulario" onSubmit={guardarCambios}>
					<div className="grupo-input">
						<label>Nombre a mostrar:</label>
						<input
							type="text"
							value={inputNombre}
							onChange={(e) => setInputNombre(e.target.value)}
							placeholder="Tu nombre..."
							required
						/>
					</div>

					<div className="grupo-input">
						<label>URL de tu foto (opcional):</label>
						<input
							type="text"
							value={inputFoto}
							onChange={(e) => setInputFoto(e.target.value)}
							placeholder="https://ejemplo.com/mifoto.jpg"
						/>
					</div>

					<div className="grupo-input">
						<label>Descripción:</label>
						<textarea
							value={inputDescripcion}
							onChange={(e) => setInputDescripcion(e.target.value)}
							placeholder="Cuéntanos algo sobre ti..."
							rows="4"
						/>
					</div>

					<button type="submit" className="btn-guardar-perfil">
						Guardar Cambios
					</button>
				</form>
			</section>
		</div>
	);
};

export default Perfil;
