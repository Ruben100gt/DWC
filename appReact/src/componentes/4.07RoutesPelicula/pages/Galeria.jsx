import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Galeria = () => {
	return (
		<>
			<h2>Galería de películas.</h2>
			<ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
				<li>
					<Link to="titulo">Por título</Link>
				</li>
				<li>
					<Link to="interprete">Por intérprete</Link>
				</li>
				<li>
					<Link to="director">Por director</Link>
				</li>
			</ul>
			<hr />
			<Outlet />
		</>
	);
};

export default Galeria;
