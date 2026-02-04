import React, { useState, createContext, useEffect } from 'react';
import useSupabase from '../hooks/useSupabase.js';
import useNotificacion from '../hooks/useNotificacion.js'; // IMPORTANTE: Singular

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
	const [usuario, setUsuario] = useState(null);
	const [sesionIniciada, setSesionIniciada] = useState(false);
	const [datosSesion, setDatosSesion] = useState({
		nombre: '',
		email: '',
		password: '',
		password2: '',
	});

	const { registro, iniciarSesion, cerrarSesion, obtenerSesion, suscribirse } = useSupabase();

	// Usamos 'notificacion' en lugar de 'mostrarAviso'
	const { notificacion } = useNotificacion();

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
			notificacion('Las contraseñas no coinciden.', 'error');
			return;
		}
		try {
			const respuesta = await registro(datosSesion.email, datosSesion.password, datosSesion.nombre);
			if (respuesta.user) {
				setDatosSesion({ nombre: '', email: '', password: '', password2: '' });
				notificacion('Revisa tu correo para confirmar la cuenta.', 'exito');
			}
		} catch (error) {
			notificacion(error.message, 'error');
		}
	};

	const iniciarSesionContraseña = async () => {
		try {
			await iniciarSesion(datosSesion.email, datosSesion.password);
			notificacion('Sesión iniciada correctamente.', 'exito');
		} catch (error) {
			notificacion(error.message, 'error');
		}
	};

	const desconectar = async () => {
		try {
			await cerrarSesion();
			setDatosSesion({
				nombre: '',
				email: '',
				password: '',
				password2: '',
			});
			notificacion('Has cerrado sesión.', 'exito');
		} catch (error) {
			notificacion(error.message, 'error');
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
