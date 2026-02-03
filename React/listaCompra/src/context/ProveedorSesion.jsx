import React, { useState, createContext, useEffect } from "react";
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
		password2: "",
	});

	const { registro, iniciarSesion, cerrarSesion, obtenerSesion, suscribirse } =
		useSupabase();
	const { mostrarAviso } = useNotificaciones();

	useEffect(() => {
		const recuperar = async () => {
			const sesion = await obtenerSesion();
			if (sesion) {
				setUsuario(sesion.user);
				setSesionIniciada(true);
			}
		};
		recuperar();

		const { subscription } = suscribirse((usuarioRecibido) => {
			if (usuarioRecibido) {
				setUsuario(usuarioRecibido);
				setSesionIniciada(true);
			} else {
				setUsuario(null);
				setSesionIniciada(false);
			}
		});

		return () => {
			if (subscription) subscription.unsubscribe();
		};
	}, []);

	const actualizarDato = (e) => {
		setDatosSesion({ ...datosSesion, [e.target.name]: e.target.value });
	};

	const crearCuenta = async () => {
		if (datosSesion.password !== datosSesion.password2) {
			mostrarAviso("Las contraseñas no coinciden.");
			return;
		}
		try {
			const respuesta = await registro(
				datosSesion.email,
				datosSesion.password,
				datosSesion.nombre,
			);
			if (respuesta.user) {
				setDatosSesion({ nombre: "", email: "", password: "", password2: "" });
				mostrarAviso(
					"Por favor. Revise su correo para conformar la creación de lacuenta.",
				);
			}
		} catch (error) {
			mostrarAviso(error.message);
		}
	};

	const iniciarSesionContraseña = async () => {
		try {
			await iniciarSesion(datosSesion.email, datosSesion.password);
			mostrarAviso("Sesión iniciada correctamente.");
		} catch (error) {
			mostrarAviso(error.message);
		}
	};

	const desconectar = async () => {
		const confirmar = window.confirm(
			"¿Estás seguro de que quieres cerrar sesión?",
		);
		if (!confirmar) return;
		try {
			await cerrarSesion();
			setDatosSesion({
				nombre: "",
				email: "",
				password: "",
				password2: "",
			});
			mostrarAviso("Has cerrado sesión.");
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

	return (
		<contextoSesion.Provider value={datosAProveer}>
			{children}
		</contextoSesion.Provider>
	);
};

export default ProveedorSesion;
export { contextoSesion };
