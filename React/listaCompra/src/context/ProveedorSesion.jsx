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
	const { seionIniciada, setSesionIniciada } = useState(sesionIniciadaInicial);

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
};
