import React, { useContext } from 'react';
import Menu from '../menu/Menu.jsx';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import './Cabecera.css';

const Cabecera = () => {
	const { usuario, sesionIniciada, desconectar } = useContext(contextoSesion);

	return (
		<header>
			<div className="contenedor-superior">
				<h1>Lista de la compra.</h1>
				{sesionIniciada && (
					<div className="bloque-usuario">
						<span>Bienvenido, {usuario?.user_metadata?.name}</span>
						<button onClick={desconectar}>Cerrar Sesión</button>
					</div>
				)}
			</div>
			<Menu />
		</header>
	);
};

export default Cabecera;
