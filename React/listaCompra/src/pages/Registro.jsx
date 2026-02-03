import React, { useEffect } from "react";
import useSesion from "../hooks/useSesion.js";
import { useNavigate } from "react-router-dom";
import "./Registro.css";

const Registro = () => {
	const { actualizarDato, crearCuenta, sesionIniciada, datosSesion } =
		useSesion();
	const navegar = useNavigate();

	useEffect(() => {
		if (sesionIniciada) navegar("/listacompra");
	}, [sesionIniciada, navegar]);

	const ejecutarRegistro = async (e) => {
		e.preventDefault();
		await crearCuenta();
	};

	return (
		<div className="principal-contenedor">
			<section className="seccion-listado">
				<h2>Crear una cuenta.</h2>
				<form onSubmit={ejecutarRegistro}>
					<div>
						<label htmlFor="nombre">Nombre:</label>
						<input
							type="text"
							name="nombre"
							id="nombre"
							placeholder="Nombre"
							value={datosSesion.nombre}
							autoComplete="name"
							onChange={actualizarDato}
							required
						/>
					</div>
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
							autoComplete="new-password"
							onChange={actualizarDato}
							required
						/>
					</div>
					<div>
						<label htmlFor="password2">Repetir Contraseña:</label>
						<input
							type="password"
							name="password2"
							id="password2"
							placeholder="Repite la contraseña"
							value={datosSesion.password2}
							autoComplete="new-password"
							onChange={actualizarDato}
							required
						/>
					</div>
					<button type="submit">Registrarse.</button>
				</form>
			</section>
		</div>
	);
};

export default Registro;
