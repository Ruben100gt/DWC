import React from "react";
import peliculas from "../../json/peliculas.json";
import { useNavigate } from "react-router-dom";
import "./Peliculas.css";

const Peliculas = () => {
	const navegar = useNavigate();
	return (
		<>
			<h2>Listado de Películas:</h2>
			<div className="peliculas">
				{peliculas.peliculas.map((peli) => (
					<div className="peli" key={peli.id}>
						<img src={peli.cartelera} />
						<h3
							onClick={() => {
								navegar(`/detallepeli/${peli.id}`);
							}}
						>
							{peli.nombre}
						</h3>
					</div>
				))}
			</div>
		</>
	);
};

export default Peliculas;
