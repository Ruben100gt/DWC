import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
	return (
		<>
			<nav>
				<Link className="menu-element" to="/">
					Inicio
				</Link>
				<Link className="menu-element" to="/listacompra">
					Lista de la compra
				</Link>
			</nav>
		</>
	);
};

export default Menu;
