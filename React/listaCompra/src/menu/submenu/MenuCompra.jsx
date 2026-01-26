import React from "react";
import { Link } from "react-router-dom";
import "./MenuCompra.css";

const Menu = () => {
	return (
		<>
			<nav>
				<Link className="menu-elemento" to="/lista">
					Lista
				</Link>
				<Link className="menu-elemento" to="/productos">
					Poductos
				</Link>
			</nav>
		</>
	);
};

export default Menu;
