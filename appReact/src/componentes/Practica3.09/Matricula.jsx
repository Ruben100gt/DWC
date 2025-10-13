import React, { useState } from "react";
import discentes from "./matriculados.json";
import "./Matricula.css";

const Matricula = () => {
	const [listadoDiscentes, setMatricula] = useState(discentes.discentes);
	const [orden, setOrden] = useState(true);

	const listadoInicial = () => {
		setMatricula(discentes.discentes);
	};

	const discentes2DAW = () => {
		const daw2 = listadoDiscentes.filter((discente) => {
			return discente.curso === "2DAW";
		});
		setMatricula(daw2);
	};

	const discentes1curso = () => {
		const curso1 = listadoDiscentes.filter((discente) => {
			return discente.curso.includes("1");
		});
		setMatricula(curso1);
	};

	const discentesDAW = () => {
		const daw = listadoDiscentes.filter((discente) => {
			return discente.curso.includes("DAW");
		});
		setMatricula(daw);
	};

	const discenteslectura = () => {
		const lectura = listadoDiscentes.filter((discente) => {
			return discente.aficiones.some((aficion) => aficion === "lectura");
		});
		setMatricula(lectura);
	};

	const ordenarListado = () => {
		const ordenar = [...listadoDiscentes].sort((a, b) => {
			const ordenado = a.apellido.localeCompare(b.apellido);
			return orden ? ordenado : -ordenado;
		});
		setMatricula(ordenar);
		setOrden(!orden);
	};

	const desmatricular = (identificador) => {
		console.log(identificador);
		const nuevoListado = listadoDiscentes.filter((discente, indice) => {
			return parseInt(identificador) !== indice;
		});
		setMatricula(nuevoListado);
	};

	return (
		<>
			<h1>Matricula</h1>
			<p>
				<button
					onClick={() => {
						discentes2DAW();
					}}
				>
					Discentes del curso 2DAW
				</button>
				<button
					onClick={() => {
						discentes1curso();
					}}
				>
					Discentes del primer curso
				</button>
				<button
					onClick={() => {
						discentesDAW();
					}}
				>
					Discentes del ciclo DAW
				</button>
				<button
					onClick={() => {
						discenteslectura();
					}}
				>
					Discentes los cuales les gusta la lectura
				</button>
				<button
					onClick={() => {
						ordenarListado();
					}}
				>
					Ordenar discentes por apellidos
				</button>
				<button
					onClick={() => {
						listadoInicial();
					}}
				>
					Reiniciar listado
				</button>
				<button
					onClick={(evento) => {
						desmatricular(evento.target.id);
					}}
				>
					Desmatricular
				</button>
			</p>
			<div className="matricula-div">
				<div>
					{Array.isArray(listadoDiscentes) && listadoDiscentes.length
						? listadoDiscentes.map((discente, indice) => {
								return (
									<p id={indice} key={crypto.randomUUID()}>
										nombre: {discente.nombre} <br />
										apellidos: {discente.apellidos} <br />
										curso: {discente.curso} <br />
										aficiones: {discente.aficiones.join(", ")} <br />
										comida: {discente.comida}
									</p>
								);
						  })
						: "No quedan discentes."}
				</div>
				<div></div>
			</div>
		</>
	);
};

export default Matricula;
