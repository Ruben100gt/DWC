import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDiscos from '../hooks/useDiscos.js';
import Cargando from '../estructura/Cargando.jsx';
import './Discos.css';

const Discos = () => {
	const navegar = useNavigate();
	const { discos, borrarDisco, cargando } = useDiscos();

	const [textoBuscar, setTextoBuscar] = useState('');
	const [discosFiltrados, setDiscosFiltrados] = useState([]);

	const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
	const [idABorrar, setIdABorrar] = useState(null);

	useEffect(() => {
		setDiscosFiltrados(discos);
	}, [discos]);

	const haydiscos = discosFiltrados.length > 0;

	const buscar = () => {
		const filtrados = discos.filter((d) => d.nombre.toLowerCase().includes(textoBuscar.toLowerCase()));
		setDiscosFiltrados(filtrados);
	};

	const limpiar = () => {
		setTextoBuscar('');
		setDiscosFiltrados(discos);
	};

	const actualizarBusqueda = (e) => {
		setTextoBuscar(e.target.value);
	};

	const solicitarBorrar = (id) => {
		setIdABorrar(id);
		setMostrarConfirmar(true);
	};

	const confirmarBorrado = async () => {
		try {
			await borrarDisco(idABorrar);
			setMostrarConfirmar(false);
		} catch (error) {
			console.log('Error eliminando disco:', error.message);
		}
	};

	const cancelarBorrado = () => {
		setMostrarConfirmar(false);
		setIdABorrar(null);
	};

	if (cargando) {
		return <Cargando />;
	}

	return (
		<>
			{mostrarConfirmar && (
				<div className="contenedorConfirmar">
					<div className="TarjetaConfirmar">
						<h3>¿Estás seguro de eliminar este disco?</h3>
						<p>Esta acción es permanente.</p>
						<button onClick={confirmarBorrado}>Sí, eliminar.</button>
						<button onClick={cancelarBorrado}>Cancelar.</button>
					</div>
				</div>
			)}
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
					{cargando ? (
						<Cargando />
					) : haydiscos ? (
						discosFiltrados.map((disco) => (
							<div className="disco" key={disco.id}>
								<img src={disco.caratula} alt={disco.nombre} />
								<h3
									onClick={() => {
										navegar(`/detalledisco/${disco.id}`);
									}}
								>
									- {disco.nombre} <br /> - {disco.artista}
									<br /> - {disco.genero}
								</h3>
								<button className="editarDisco" onClick={() => navegar(`/editardisco/${disco.id}`)}>
									Editar
								</button>
								<button className="eliminarDisco" onClick={() => solicitarBorrar(disco.id)}>
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
