import React from "react";
import { Link } from "react-router-dom";
import "./MenuCompra.css";

const Menu = () => {
	return (
		<>
			<nav>
				<Link className="menu-element" to="/lista">
					Lista
				</Link>
				<Link className="menu-element" to="/productos">
					Poductos
				</Link>
			</nav>
		</>
	);
};

export default Menu;
