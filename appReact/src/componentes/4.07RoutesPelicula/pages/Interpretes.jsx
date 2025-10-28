import React from "react";
import peliculas from "../../json/peliculas.json";
import "./Interpretes.css";

const Interpretes = () => {
	return (
		<>
			<h2>Listado de Intérpretes</h2>
			<div className="interprete">
				{peliculas.peliculas.map((peli) =>
					peli.actores.map((actor, id) => (
						<div className="interp" key={id}>
							<img src={actor.imagen} />
							<h3>{actor.nombre}</h3>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default Interpretes;
