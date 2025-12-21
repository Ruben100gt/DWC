import React, { createContext, useEffect, useState } from 'react';
import { traerPeliculas, traerPersonajes, traerDatos } from '../libraries/starwars.js';

const ContextoPeliculas = createContext();

const ProveedorPeliculas = ({ children }) => {
	const [peliculas, setPeliculas] = useState([]);
	const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
	const [personajes, setPersonajes] = useState([]);
	const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
	const [vehiculos, setVehiculos] = useState([]);

	useEffect(() => {
		const cargarPeliculas = async () => {
			try {
				const datos = await traerPeliculas('https://swapi.py4e.com/api/films/');
				setPeliculas(datos);
			} catch (error) {
				console.log('Error cargando películas:', error.message);
			}
		};

		cargarPeliculas();
	}, []);

	useEffect(() => {
		if (!peliculaSeleccionada) return;

		const cargarPersonajes = async () => {
			try {
				const datos = await traerPersonajes(peliculaSeleccionada.characters);
				setPersonajes(datos);
				setPersonajeSeleccionado(null);
			} catch (error) {
				console.log('Error cargando personajes:', error.message);
			}
		};

		cargarPersonajes();
	}, [peliculaSeleccionada]);

	const seleccionarPelicula = (id) => {
		const peli = peliculas.find((p) => p.episode_id === id);
		setPeliculaSeleccionada(peli);
	};

	const cargarVehiculos = async (urls) => {
		if (!urls || urls.length === 0) {
			setVehiculos([]);
			return [];
		}
		try {
			const datos = await traerDatos(urls);
			setVehiculos(datos);
			return datos;
		} catch (error) {
			console.log('Error cargando vehículos:', error.message);
			setVehiculos([]);
			return [];
		}
	};

	const cosasParaExportar = {
		peliculas,
		peliculaSeleccionada,
		seleccionarPelicula,
		personajes,
		personajeSeleccionado,
		setPersonajeSeleccionado,
		vehiculos,
		cargarVehiculos,
	};
	return <ContextoPeliculas.Provider value={cosasParaExportar}>{children}</ContextoPeliculas.Provider>;
};

export default ProveedorPeliculas;
export { ContextoPeliculas };
