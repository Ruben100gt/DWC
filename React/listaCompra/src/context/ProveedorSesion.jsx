import React, { createContext, useState, useEffect } from 'react';
import { supabaseConexion } from '../supabase/supabase.js';
import { useNavigate } from 'react-router-dom';
import { useSesion } from '../hooks/useSesion.js';

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
	const { obtenerUsuario, usuario, errorUsuario, actualizarDato, crearCuenta, iniciarSesionPassword, cerrarSesion } =
		useSesion();

	const sesionIniciadaInicial = false;
	const navegar = useNavigate();

	const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);

	useEffect(() => {
		const suscripcion = supabaseConexion.auth.onAuthStateChange((event, session) => {
			if (session) {
				setSesionIniciada(true);
				obtenerUsuario();
			} else {
				setSesionIniciada(false);
			}
		});

		return () => {
			if (suscripcion?.data?.subscription) {
				suscripcion.data.subscription.unsubscribe();
			}
		};
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

	return <contextoSesion.Provider value={datosProveer}>{children}</contextoSesion.Provider>;
};

export default ProveedorSesion;
export { contextoSesion };
