import React, { useState, createContext } from "react";
import useSupabase from "../hooks/useSupabase.js";
import useNotificaciones from "../hooks/useNotificacion.js";

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
	const [usuario, setUsuario] = useState(null);
	const [sesionIniciada, setSesionIniciada] = useState(false);
	const [datosSesion, setDatosSesion] = useState({
		nombre: "",
		email: "",
		password: "",
	});

	const { registro, login, logout } = useSupabase();
	const { mostrarAviso } = useNotificaciones();

	const actualizarDato = (e) => {
		setDatosSesion({ ...datosSesion, [e.target.name]: e.target.value });
	};

	const crearCuenta = async () => {
		const { data, error } = await registro(
			datosSesion.email,
			datosSesion.password,
			datosSesion.nombre,
		);
		if (error) {
			mostrarAviso(error.message);
		} else {
			setUsuario(data.user);
			setSesionIniciada(true);
			mostrarAviso("Cuenta creada correctamente.");
		}
	};

	const iniciarSesionPassword = async () => {
		const { data, error } = await login(
			datosSesion.email,
			datosSesion.password,
		);
		if (error) {
			mostrarAviso(error.message);
		} else {
			setUsuario(data.user);
			setSesionIniciada(true);
			mostrarAviso("Sesión iniciada correctamente.");
		}
	};

	const cerrarSesion = async () => {
		await logout();
		setUsuario(null);
		setSesionIniciada(false);
		mostrarAviso("Has cerrado sesión.");
	};

	const datosAProveer = {
		usuario,
		sesionIniciada,
		actualizarDato,
		crearCuenta,
		iniciarSesionPassword,
		cerrarSesion,
	};

	return (
		<contextoSesion.Provider value={datosAProveer}>
			{children}
		</contextoSesion.Provider>
	);
};

export default ProveedorSesion;
export { contextoSesion };
