import React from 'react';
import peliculas from '../../json/peliculas.json';

const GaleriaTodas = () => {
	//Mostramos la galería de películas en otra subruta, para poder cambiar el contenido del submenú en la misma sección.
	return (
		<>
			<div className="galeria">
				{peliculas.peliculas.map((peli) => (
					<div key={peli.id} className="gal">
						<img src={peli.cartelera} alt={peli.nombre} />
						<h3>{peli.nombre}</h3>
					</div>
				))}
			</div>
		</>
	);
};

export default GaleriaTodas;
