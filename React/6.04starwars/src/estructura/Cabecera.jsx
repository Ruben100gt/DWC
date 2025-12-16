import React from 'react';
import Menu from '../menu/Menu.jsx';
import './Cabecera.css';

const Cabecera = () => {
	return (
		<>
			<header>
				<video autoPlay muted loop id="video-fondo">
					<source src="/espacio.mp4" type="video/mp4" />
				</video>
				<h1>Listado de peliculas.</h1>
				<Menu />
			</header>
		</>
	);
};

export default Cabecera;
