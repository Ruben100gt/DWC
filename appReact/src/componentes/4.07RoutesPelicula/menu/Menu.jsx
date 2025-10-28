import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
	return (
		<>
			<nav>
				<Link className="menu-elemento" to="/">
					Inicio
				</Link>
				<Link className="menu-elemento" to="/peliculas">
					Peliculas
				</Link>
				<Link className="menu-elemento" to="/interpretes">
					Interpretes
				</Link>
				<Link className="menu-elemento" to="/galeria">
					Galeria
				</Link>
				<Link className="menu-elemento" to="/acerca-de">
					Acerca de
				</Link>
			</nav>
		</>
	);
};

export default Menu;
