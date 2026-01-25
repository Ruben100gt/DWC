import React, { useContext, useEffect } from 'react';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import { contextoNotificaciones } from '../context/ProveedorNotificaciones.jsx';
import { useNavigate } from 'react-router-dom';
import './Registro.css';

const Registro = () => {
	const { actualizarDato, crearCuenta, errorUsuario, sesionIniciada } = useContext(contextoSesion);
	const { mostrarAviso } = useContext(contextoNotificaciones);
	const navegar = useNavigate();

	useEffect(() => {
		if (sesionIniciada) {
			navegar('/listacompra');
		}
	}, [sesionIniciada, navegar]);

	const ejecutarRegistro = async (e) => {
		e.preventDefault();
		await crearCuenta();
		if (!errorUsuario) {
			mostrarAviso('Registro realizado. Revisa tu correo electrónico para confirmar la cuenta.');
		}
	};

	return (
		<div className="principal-contenedor">
			<section className="seccion-listado">
				<h2>Crear una cuenta.</h2>
				<form onSubmit={ejecutarRegistro}>
					<div>
						<label>Nombre:</label>
						<input type="text" name="nombre" onChange={actualizarDato} required />
					</div>
					<div>
						<label>Email:</label>
						<input type="email" name="email" onChange={actualizarDato} required />
					</div>
					<div>
						<label>Contraseña:</label>
						<input type="password" name="password" onChange={actualizarDato} required />
					</div>
					<button type="submit">Registrarse.</button>
				</form>
				{errorUsuario && <p style={{ color: 'red' }}>{errorUsuario}</p>}
			</section>

			<section className="seccion-detalles">
				<h3>Ayuda.</h3>
				<p>Crea una cuenta para empezar a gestionar tus listas de la compra de forma personalizada.</p>
			</section>
		</div>
	);
};

export default Registro;
