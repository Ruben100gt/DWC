import React, { useState } from 'react';

const useAPI = () => {
	const [cargando, setCargando] = useState(false);
	const [error, setError] = useState(null);

	const solicitud = async (url, options = {}) => {
		setCargando(true);
		setError(null);
		try {
			const respuesta = await fetch(url, {
				headers: {
					'Content-Type': 'application/json',
				},
				...options,
			});
			if (!respuesta.ok) {
				throw new Error(`Error en la solicitud ${respuesta.status}: ${respuesta.statusText}`);
			}
			const datos = await respuesta.json();
			return datos;
		} catch (error) {
			setError(error.message || 'Algo salió mal, feo.');
			throw error;
		} finally {
			setCargando(false);
		}
	};

	// Función para GET.
	const obtener = (url) => {
		return solicitud(url, { method: 'GET' });
	};

	// Función para POST.
	const guardar = (url, body) => {
		return solicitud(url, {
			method: 'POST',
			body: JSON.stringify(body),
		});
	};

	// Función para PUT.
	const editarPUT = (url, body) =>
		solicitud(url, {
			method: 'PUT',
			body: JSON.stringify(body),
		});
	// Función para PATCH.
	const editarPATCH = (url, body) =>
		solicitud(url, {
			method: 'PATCH',
			body: JSON.stringify(body),
		});

	// Fución para DELETE.
	const borrar = (url) =>
		solicitud(url, {
			method: 'DELETE',
		});

	return {
		cargando,
		error,
		obtener,
		guardar,
		editarPUT,
		editarPATCH,
		borrar,
	};
};

export default useAPI;
