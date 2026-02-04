import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import './Menu.css';

const Menu = () => {
	const { sesionIniciada } = useContext(contextoSesion);

	return (
		<nav>
			<Link className="menu-elemento" to="/">
				Inicio.
			</Link>
			<Link className="menu-elemento" to="/listacompra">
				Lista Compra.
			</Link>
			<Link className="menu-elemento" to="/productos">
				Productos.
			</Link>
			{!sesionIniciada && (
				<>
					<Link className="menu-elemento" to="/login">
						Iniciar Sesión.
					</Link>
					<Link className="menu-elemento" to="/registro">
						Registrarse.
					</Link>
				</>
			)}
		</nav>
	);
};

export default Menu;
