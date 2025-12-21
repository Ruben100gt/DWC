import React, { useContext, useState, useEffect } from 'react';
import { ContextoPeliculas } from '../context/ProveedorPeliculas.jsx';
import './PersonajeDetalle.css';

const PersonajeDetalle = ({ personaje }) => {
	const { cargarVehiculos } = useContext(ContextoPeliculas);
	const [vehiculosPersonaje, setVehiculosPersonaje] = useState([]);
	const [mostrarDetalles, setMostrarDetalles] = useState(false);

	useEffect(() => {
		const cargar = async () => {
			try {
				if (!personaje || !personaje.vehicles || personaje.vehicles.length === 0) {
					setVehiculosPersonaje([]);
					setMostrarDetalles(false);
					return;
				}
				const datos = await cargarVehiculos(personaje.vehicles);
				setVehiculosPersonaje(datos || []);
				setMostrarDetalles(false);
			} catch (error) {
				console.log('Error cargando vehículos del personaje:', error.message);
				setVehiculosPersonaje([]);
				setMostrarDetalles(false);
			}
		};
		cargar();
	}, [personaje]);

	if (!personaje) return null;

	const toggleDetalles = () => {
		setMostrarDetalles((prev) => !prev);
	};

	return (
		<div className="ficha">
			<h4>{personaje.name}</h4>
			<p>Género: {personaje.gender}</p>
			<p>Altura: {personaje.height} cm</p>
			<p>Peso: {personaje.mass} kg</p>
			<p>Color de pelo: {personaje.hair_color}</p>
			<p>Color de ojos: {personaje.eye_color}</p>

			<h5>Vehículos que pilota:</h5>
			{vehiculosPersonaje.length === 0 ? (
				<p>Este personaje no tiene vehículos ni naves.</p>
			) : (
				<ul>
					{vehiculosPersonaje.map((v) => (
						<li key={crypto.randomUUID()}>{v.name}</li>
					))}
				</ul>
			)}

			{vehiculosPersonaje.length > 0 && (
				<button onClick={toggleDetalles}>{mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}</button>
			)}

			{mostrarDetalles && vehiculosPersonaje.length > 0 && (
				<div className="vehiculos">
					{vehiculosPersonaje.map((v) => (
						<div key={crypto.randomUUID()} className="vehiculo">
							<h5>{v.name}</h5>
							<p>Modelo: {v.model}</p>
							<p>Fabricante: {v.manufacturer}</p>
							<p>Costo en créditos: {v.cost_in_credits}</p>
							<p>Tripulación: {v.crew}</p>
							<p>Pasajeros: {v.passengers}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default PersonajeDetalle;
