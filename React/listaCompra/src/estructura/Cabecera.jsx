import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../menu/Menu.jsx';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import Confirmacion from '../pages/Confirmacion.jsx';
import fotoDefecto from '../assets/patitoFeo.jpg';
import './Cabecera.css';

const Cabecera = () => {
	const { usuario, sesionIniciada, desconectar, nombrePerfil, fotoPerfil, rolUsuario } = useContext(contextoSesion);
	const [confirmandoSalida, setConfirmandoSalida] = useState(false);
	const navigate = useNavigate();

	const manejarLogout = () => {
		desconectar();
		setConfirmandoSalida(false);
	};

	return (
		<header>
			<div className="contenedor-superior">
				<h1>Lista de la compra.</h1>

				{sesionIniciada && (
					<div className="bloque-usuario">
						{rolUsuario === 'administrador' && (
							<div className="zona-admin-cabecera">
								<button
									className="btn-header-admin"
									onClick={() => navigate('/admin/roles')}
									title="Gestionar roles de usuario"
								>
									Roles
								</button>
							</div>
						)}

						<div className="info-usuario-cabecera" onClick={() => navigate('/perfil')} title="Editar Perfil">
							<img
								src={fotoPerfil || fotoDefecto}
								alt="Perfil"
								className="foto-perfil-mini"
								onError={(e) => {
									e.target.src = fotoDefecto;
								}}
							/>
							<span className="nombre-enlace">{nombrePerfil || usuario?.user_metadata?.name || usuario?.email}</span>
						</div>

						<button className="btn-cerrar-sesion" onClick={() => setConfirmandoSalida(true)}>
							Salir
						</button>
					</div>
				)}
			</div>

			<Menu />

			{confirmandoSalida && (
				<Confirmacion
					mensaje="¿Seguro que quieres cerrar sesión?"
					onConfirmar={manejarLogout}
					onCancelar={() => setConfirmandoSalida(false)}
				/>
			)}
		</header>
	);
};

export default Cabecera;
