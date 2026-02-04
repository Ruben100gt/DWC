import React, { useContext, useState } from 'react';
import Menu from '../menu/Menu.jsx';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import Confirmacion from '../pages/Confirmacion.jsx';
import './Cabecera.css';

const Cabecera = () => {
	const { usuario, sesionIniciada, desconectar } = useContext(contextoSesion);

	const [confirmandoSalida, setConfirmandoSalida] = useState(false);

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
						<span>Bienvenido, {usuario?.user_metadata?.name || usuario?.email}</span>

						<button onClick={() => setConfirmandoSalida(true)}>Cerrar Sesión</button>
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
