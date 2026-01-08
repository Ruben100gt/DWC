import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Discos.css';

const Discos = ({ listaDiscos, setListaDiscos }) => {
	const navegar = useNavigate();
	const haydiscos = listaDiscos.length > 0;

	const [textoBuscar, setTextoBuscar] = useState('');
	const [discosFiltrados, setDiscosFiltrados] = useState(listaDiscos);

	const buscar = () => {
		const buscado = textoBuscar;

		const filtrados = listaDiscos.filter((d) => d.nombre.includes(buscado));
		setDiscosFiltrados(filtrados);
	};

	const limpiar = () => {
		setTextoBuscar('');
		setDiscosFiltrados(listaDiscos);
	};

	const actualizarBusqueda = (e) => {
		setTextoBuscar(e.target.value);
	};

	const eliminarDisco = (id) => {
		const nuevaLista = listaDiscos.filter((d) => d.id !== id);
		setListaDiscos(nuevaLista);
		setDiscosFiltrados(nuevaLista);
		localStorage.setItem('coleccionDiscos', JSON.stringify(nuevaLista));
	};

	return (
		<>
			<div id="listaDiscos">
				<h2>Listado de Discos:</h2>

				<div id="discosMostrados">
					<div id="busqueda">
						<input
							type="text"
							id="textoBuscar"
							placeholder="Busca por nombre."
							value={textoBuscar}
							onChange={actualizarBusqueda}
						/>
						<input type="button" id="botonBuscar" value="Buscar" onClick={buscar} />
						<input type="button" id="botonLimpiar" value="Limpiar" onClick={limpiar} />
					</div>
					<hr />
				</div>

				<div className="discos">
					{haydiscos ? (
						discosFiltrados.map((disco) => (
							<div className="disco" key={disco.id}>
								<img src={disco.cartelera} alt={disco.nombre} />
								<h3
									onClick={() => {
										navegar(`/detalledisco/${disco.id}`);
									}}
								>
									- {disco.nombre} <br /> - {disco.artista}
									<br /> - {disco.genero}
								</h3>
								<button className="eliminarDisco" onClick={() => eliminarDisco(disco.id)}>
									X
								</button>
							</div>
						))
					) : (
						<div>
							<h3>NO HAY DISCOS</h3>
							<p>Lo sentimos mucho. No hemos encontrado ningún disco.</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Discos;
