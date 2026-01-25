import { useState } from 'react';
import { supabaseConexion } from '../supabase/supabase.js';
import { useNavigate } from 'react-router-dom';

export const useSesion = () => {
	const datosSesionInicial = {
		email: '',
		password: '',
	};
	const usuarioInicial = {};
	const errorUsuarioInicial = '';

	const navegar = useNavigate();

	const [datosSesion, sertDatosSesion] = useState(datosSesionInicial);
	const [usuario, setUsuario] = useState(usuarioInicial);
	const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);

	const crearCuenta = async () => {
		try {
			const { data, error } = await supabaseConexion.auth.signUp({
				email: datosSesion.email,
				password: datosSesion.password,
				options: {
					data: {
						name: datosSesion.nombre,
					},
				},
			});

			if (error) {
				throw error;
			} else {
				setErrorUsuario('Recibirás un correo electrónico para la configuración de la cuenta.');
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
					emailRedirectTo: 'http://localhost:5173/',
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
			navegar('/');
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

	return {
		datosSesion,
		usuario,
		errorUsuario,
		crearCuenta,
		iniciarSesionPassword,
		cerrarSesion,
		obtenerUsuario,
		actualizarDato,
		setErrorUsuario,
	};
};
