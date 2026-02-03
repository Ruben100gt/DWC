import React, { useEffect } from "react";
import useSesion from "../hooks/useSesion.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const {
		actualizarDato,
		iniciarSesionContraseña,
		sesionIniciada,
		datosSesion,
	} = useSesion();
	const navegar = useNavigate();

	useEffect(() => {
		if (sesionIniciada) navegar("/listacompra");
	}, [sesionIniciada, navegar]);

	const enviarAcceso = async (e) => {
		e.preventDefault();
		await iniciarSesionContraseña();
	};

	return (
		<div className="principal-contenedor">
			<section className="seccion-listado">
				<h3>Identifícate.</h3>
				<form onSubmit={enviarAcceso}>
					<div>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="nombre@algo.com"
							value={datosSesion.email}
							autoComplete="email"
							onChange={actualizarDato}
							required
						/>
					</div>
					<div>
						<label htmlFor="password">Contraseña:</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Contraseña"
							value={datosSesion.password}
							autoComplete="current-password"
							onChange={actualizarDato}
							required
						/>
					</div>
					<button type="submit">Entrar.</button>
				</form>
			</section>
		</div>
	);
};

export default Login;
