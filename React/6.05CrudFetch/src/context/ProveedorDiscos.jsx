import React, { useState, useEffect, createContext } from 'react';
import useAPI from '../hooks/useAPI.js';

const ContextoDiscos = createContext();

const ProveedorDiscos = ({ children }) => {
	const [discos, setDiscos] = useState([]);

	const API_URL = 'http://localhost:3000/discos';

	const { obtener, guardar, borrar, editarPUT, editarPATCH, cargando, error } = useAPI();

	const obtenerDiscos = async () => {
		try {
			const datos = await obtener(API_URL);
			setDiscos(datos);
		} catch (error) {
			console.log('Error cargando discos:', error.message);
		}
	};

	const guardarDisco = async (datos) => {
		try {
			await guardar(API_URL, datos);
			obtenerDiscos();
		} catch (error) {
			console.log('Error guardando disco:', error.message);
		}
	};

	const borrarDisco = async (id) => {
		try {
			await borrar(`${API_URL}/${id}`);
			obtenerDiscos();
		} catch (error) {
			console.log('Error borrando disco:', error.message);
		}
	};

	const editarDiscoCompleto = async (id, datos) => {
		try {
			await editarPUT(`${API_URL}/${id}`, datos);
			obtenerDiscos();
		} catch (error) {
			console.log('Error editando disco:', error.message);
		}
	};

	const editarDiscoParcial = async (id, datos) => {
		try {
			await editarPATCH(`${API_URL}/${id}`, datos);
			obtenerDiscos();
		} catch (error) {
			console.log('Error editando disco:', error.message);
		}
	};

	useEffect(() => {
		obtenerDiscos();
	}, []);

	const datosAProveer = {
		discos,
		obtenerDiscos,
		guardarDisco,
		borrarDisco,
		editarDiscoCompleto,
		editarDiscoParcial,
		cargando,
		error,
	};

	return <ContextoDiscos.Provider value={datosAProveer}>{children}</ContextoDiscos.Provider>;
};

export default ProveedorDiscos;
export { ContextoDiscos };
