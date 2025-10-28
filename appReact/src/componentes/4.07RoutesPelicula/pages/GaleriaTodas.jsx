import React from "react";
import peliculas from "../../json/peliculas.json";

const GaleriaTodas = () => {
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
