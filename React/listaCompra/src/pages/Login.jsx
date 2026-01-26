import React, { useContext, useEffect } from "react";
import { contextoSesion } from "../context/ProveedorSesion.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const {
		actualizarDato,
		iniciarSesionPassword,
		errorUsuario,
		sesionIniciada,
	} = useContext(contextoSesion);
	const navegar = useNavigate();

	useEffect(() => {
		if (sesionIniciada) {
			navegar("/listacompra");
		}
	}, [sesionIniciada, navegar]);

	const enviarAcceso = async (e) => {
		e.preventDefault();
		await iniciarSesionPassword();
	};

	return (
		<div className="principal-contenedor">
			<section className="seccion-listado">
				<h3>Identifícate.</h3>
				<form onSubmit={enviarAcceso}>
					<div>
						<label>Email:</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="nombre@algo.com"
							onChange={actualizarDato}
							required
						/>
					</div>
					<div>
						<label>Contraseña:</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Contraseña"
							onChange={actualizarDato}
							required
						/>
					</div>
					<button type="submit">Entrar.</button>
				</form>
				{errorUsuario && <p style={{ color: "red" }}>{errorUsuario}</p>}
			</section>
		</div>
	);
};

export default Login;
