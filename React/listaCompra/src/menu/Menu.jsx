import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextoSesion } from '../context/ProveedorSesion.jsx';
import './Menu.css';

const Menu = () => {
	const { sesionIniciada } = useContext(contextoSesion);

	return (
		<nav>
			<Link className="menu-element" to="/">
				Inicio.
			</Link>

			{!sesionIniciada ? (
				<>
					<Link className="menu-element" to="/login">
						Iniciar Sesión.
					</Link>
					<Link className="menu-element" to="/registro">
						Registrarse.
					</Link>
				</>
			) : (
				<>
					<Link className="menu-element" to="/listacompra">
						Lista de la compra.
					</Link>
					<Link className="menu-element" to="/productos">
						Productos.
					</Link>
				</>
			)}
		</nav>
	);
};

export default Menu;
