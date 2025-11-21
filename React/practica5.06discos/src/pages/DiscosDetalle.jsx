import React from "react";
import { useParams } from "react-router-dom";
import discos from "../json/discos.json";
import "./DiscosDetalle.css";

const DiscosDetalle = () => {
	const { id } = useParams();
	//Buscamos la pelicula que queremos mostrar
	const infoDisco = discos.discos.find((p) => p.id === parseInt(id));
	return (
		<>
			<h2>Detalles de la Película</h2>
			<h1>
				<strong>{infoDisco.nombre}</strong>
			</h1>
			<div className="disco-detalle">
				<img src={infoDisco.cartelera} />
				<p>
					<b>Director:</b> {infoDisco.director}
				</p>
				<p>
					<b>Clasificación:</b> {infoDisco.clasificacion}
				</p>
				<p>
					<b>Recaudación:</b> {infoDisco.recaudacion}
				</p>
				<p>
					<b>Nota:</b> {infoDisco.nota}
				</p>
				<p>
					<b>Resumen:</b> {infoDisco.resumen}
				</p>

				<h3>Actores:</h3>
				<div className="actores">
					{infoDisco.actores.map((actor) => (
						<div key={actor.nombre} className="actor">
							<img src={actor.imagen} />
							<h3>{actor.nombre}</h3>
							<p>
								<b>Fecha de nacimiento:</b> {actor.fechaNacimiento}
							</p>
							<p>{actor.biografia}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default DiscosDetalle;
