import React from 'react';
import discos from '../json/discos.json';
import { useNavigate } from 'react-router-dom';
import './Discos.css';

const Discos = ({ listaDiscos }) => {
	const navegar = useNavigate();
	const haydiscos = listaDiscos.length > 0;

	return (
		<>
			<h2>Listado de Discos:</h2>
			<div id="discosMostrados">
				<div id="busqueda">
					<input type="text" id="textoBuscar" placeholder="Busca por nombre." />
					<input type="button" id="botonBuscar" value="Buscar" />
					<input type="button" id="botonLimpiar" value="Limpiar" />
				</div>
				<hr />
				<div id="listadoDiscos"></div>
			</div>

			<div className="discos">
				{haydiscos ? (
					discos.discos.map((disco) => (
						<div className="disco" key={disco.id}>
							<img src={disco.cartelera} alt={disco.nombre} />
							<h3
								onClick={() => {
									navegar(`/detalledisco/${disco.id}`);
								}}
							>
								{disco.nombre} - {disco.artista} - {disco.genero}
							</h3>
						</div>
					))
				) : (
					<div>
						<h3>NO HAY DISCOS</h3>
						<p>Lo sentimos mucho. No hemos encontrado ningún disco.</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Discos;
