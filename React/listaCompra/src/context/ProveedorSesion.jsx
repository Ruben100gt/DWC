import React, { createContext, useState, useEffect } from "react";
import { supabaseConexion } from "../supabase/supabase.js";
import { useNavigate } from "react-router-dom";

const ProveedorSesion = ({ children }) => {
	const datosSesionInicial = {
		email: "",
		password: "",
	};
	const usuarioInicial = {};
	const errorUsuarioInicial = "";
	const sesionIniciadaInicial = false;

	const navegar = useNavigate();

	const [datosSesion, sertDatosSesion] = useState(datosSesionInicial);
	const [usuario, setUsuario] = useState(usuarioInicial);
	const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
	const { sesionIniciada, setSesionIniciada } = useState(sesionIniciadaInicial);

	const crearCuenta = async () => {
		try {
			const { data, error } = await supabaseConexion.auth.singUp({
				email: datosSesion.email,
				password: datosSesion.password,
			});

			if (error) {
				throw error;
			} else {
				setErrorUsuario(
					"Recibirás un correo electrónico para la configuración de la cuenta.",
				);
			}
		} catch (error) {
			setErrorUsuario(error.message);
		}
	};

	const iniciarSesionPassword = async () => {
		setErrorUsuario(errorUsuarioInicial);
		try {
			const { data, error } = await supabaseConexion.auth.signInWithPassword({
				email: datosSesion.email,
				password: datosSesion.password,
				options: {
					emailRedirectTo: "http://localhost:5173/",
				},
			});
			if (error) {
				throw error;
			}
		} catch (error) {
			setErrorUsuario(error.message);
		}
	};

	const cerrarSesion = async () => {
		try {
			await supabaseConexion.auth.signOut();
			setErrorUsuario(errorUsuarioInicial);
			navegar("/supabase/inicio");
		} catch (error) {
			setErrorUsuario(error.message);
		}
	};

	const obtenerUsuario = async () => {
		try {
			const { data, error } = await supabaseConexion.auth.getUser();

			if (error) {
				throw error;
			}
			setUsuario(data.user);
			setErrorUsuario(errorUsuarioInicial);
		} catch (error) {
			setErrorUsuario(error.message);
		}
	};

	const actualizarDato = (evento) => {
		const { name, value } = evento.target;
		sertDatosSesion({ ...datosSesion, [name]: value });
	};

	useEffect(() => {
		const suscripcion = supabaseConexion.auth.onAuthStateChange(
			(event, session) => {
				if (session) {
					navegar("/supabase/listado");
					setSesionIniciada(true);
					obtenerUsuario();
				} else {
					navegar("supabase/IniciarSesion");
					setSesionIniciada(false);
				}
			},
		);
	}, []);

	const datosProveer = {
		crearCuenta,
		iniciarSesionPassword,
		cerrarSesion,
		actualizarDato,
		sesionIniciada,
		usuario,
		errorUsuario,
	};

	return (
		<contextoSesion.Provider value={datosProveer}>
			{children}
		</contextoSesion.Provider>
	);
};

export default ProveedorSesion;
export { contextoSesion };
