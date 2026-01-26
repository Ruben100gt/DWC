import React from "react";
import Menu from "../menu/Menu.jsx";
import useSesion from "../hooks/useSesion.js";
import "./Cabecera.css";

const Cabecera = () => {
	const { usuario, sesionIniciada, cerrarSesion } = useSesion();

	return (
		<header>
			<div className="contenedor-superior">
				<h1>Lista de la compra.</h1>
				{sesionIniciada && (
					<div className="bloque-usuario">
						<span>Bienvenido, {usuario?.user_metadata?.name}</span>
						<button onClick={cerrarSesion}>Cerrar Sesión</button>
					</div>
				)}
			</div>
			<Menu />
		</header>
	);
};

export default Cabecera;
