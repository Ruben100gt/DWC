import React, { useState, createContext, useEffect } from 'react';
import useSupabase from '../hooks/useSupabase.js';
import useNotificacion from '../hooks/useNotificacion.js';

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
	const [usuario, setUsuario] = useState(null);
	const [sesionIniciada, setSesionIniciada] = useState(false);
	const [rolUsuario, setRolUsuario] = useState(null);
	const [nombrePerfil, setNombrePerfil] = useState('');
	const [fotoPerfil, setFotoPerfil] = useState('');
	const [descripcionPerfil, setDescripcionPerfil] = useState('');
	const [datosSesion, setDatosSesion] = useState({
		nombre: '',
		email: '',
		password: '',
		password2: '',
	});

	const {
		registro,
		iniciarSesion,
		cerrarSesion,
		obtenerSesion,
		suscribirse,
		obtenerRolUsuario,
		obtenerPerfil,
		actualizarPerfil: actualizarPerfilSupabase,
	} = useSupabase();
	const { notificacion } = useNotificacion();

	const cargarDatosPerfil = async (idUsuario) => {
		const datos = await obtenerPerfil(idUsuario);
		if (datos) {
			setNombrePerfil(datos.nombre || '');
			setFotoPerfil(datos.avatar_url || '');
			setDescripcionPerfil(datos.descripcion || '');
		}
	};

	useEffect(() => {
		const recuperar = async () => {
			const sesion = await obtenerSesion();
			if (sesion) {
				setUsuario(sesion.user);
				setSesionIniciada(true);
				cargarDatosPerfil(sesion.user.id);
			}
		};
		recuperar();

		const { subscription } = suscribirse(async (usuarioRecibido) => {
			if (usuarioRecibido) {
				setUsuario(usuarioRecibido);
				setSesionIniciada(true);
				const rol = await obtenerRolUsuario(usuarioRecibido.id);
				setRolUsuario(rol);
				cargarDatosPerfil(usuarioRecibido.id);
			} else {
				setUsuario(null);
				setSesionIniciada(false);
				setRolUsuario(null);
				setNombrePerfil('');
				setFotoPerfil('');
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
			setRolUsuario(null);
			setNombrePerfil('');
			setFotoPerfil('');
			notificacion('Has cerrado sesión.', 'exito');
		} catch (error) {
			notificacion(error.message, 'error');
		}
	};

	const actualizarPerfil = async (nuevoNombre, nuevaFoto, nuevaDescripcion) => {
		try {
			await actualizarPerfilSupabase(usuario.id, nuevoNombre, nuevaFoto, nuevaDescripcion);
			setNombrePerfil(nuevoNombre);
			setFotoPerfil(nuevaFoto);
			setDescripcionPerfil(nuevaDescripcion);
			notificacion('Perfil actualizado correctamente.', 'exito');
		} catch (error) {
			notificacion('Error al actualizar el perfil.', 'error');
			console.log('Error completo:', error);
		}
	};

	const datosAProveer = {
		usuario,
		sesionIniciada,
		rolUsuario,
		datosSesion,
		actualizarDato,
		crearCuenta,
		iniciarSesionContraseña,
		desconectar,
		nombrePerfil,
		fotoPerfil,
		actualizarPerfil,
		descripcionPerfil,
	};

	return <contextoSesion.Provider value={datosAProveer}>{children}</contextoSesion.Provider>;
};

export default ProveedorSesion;
export { contextoSesion };
