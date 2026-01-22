import React from "react";
import { Link } from "react-router-dom";
import "./InicioSesion.css";

const InicioSesion = () => {
	return (
		<>
			<nav>
				<Link classname="menu-sesion" to="/login">
					Iniciar sesión.
				</Link>
			</nav>
		</>
	);
};

export default InicioSesion;
