import React, { useState, createContext, useEffect } from 'react';
import useSupabase from '../hooks/useSupabase.js';
import useNotificaciones from '../hooks/useNotificacion.js';

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
	const [usuario, setUsuario] = useState(null);
	const [sesionIniciada, setSesionIniciada] = useState(false);
	const [datosSesion, setDatosSesion] = useState({
		nombre: '',
		email: '',
		password: '',
	});

	const { registro, iniciarSesion, cerrarSesion } = useSupabase();
	const { mostrarAviso } = useNotificaciones();

	const actualizarDato = (e) => {
		setDatosSesion({ ...datosSesion, [e.target.name]: e.target.value });
	};

	const crearCuenta = async () => {
		try {
			const respuesta = await registro(datosSesion.email, datosSesion.password, datosSesion.nombre);

			setUsuario(respuesta.user);
			setSesionIniciada(true);
			mostrarAviso('Cuenta creada correctamente.');
		} catch (error) {
			mostrarAviso(error.message);
		}
	};

	const iniciarSesionContraseña = async () => {
		try {
			const respuesta = await iniciarSesion(datosSesion.email, datosSesion.password);
			setUsuario(respuesta.user);
			setSesionIniciada(true);
			mostrarAviso('Sesión iniciada correctamente.');
		} catch (error) {
			mostrarAviso(error.message);
		}
	};

	const desconectar = async () => {
		try {
			await cerrarSesion();
			setUsuario(null);
			setSesionIniciada(false);
			setDatosSesion({
				nombre: '',
				email: '',
				password: '',
			});
			mostrarAviso('Has cerrado sesión.');
		} catch (error) {
			mostrarAviso(error.message);
		}
	};

	const datosAProveer = {
		usuario,
		sesionIniciada,
		datosSesion,
		actualizarDato,
		crearCuenta,
		iniciarSesionContraseña,
		desconectar,
	};

	return <contextoSesion.Provider value={datosAProveer}>{children}</contextoSesion.Provider>;
};

export default ProveedorSesion;
export { contextoSesion };
