import React from "react";
import discentes from "./matriculados.json";
import "./Matricula.css";

const Matricula = () => {
	const [listadoDiscentes, setMatricula] = useState(discentes.discentes);
	const [orden, setOrden] = useState(true);

	const listadoInicial = () => {
		setMatricula([discentes.discentes]);
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
		const daw = listadoDiscentes.filter((discente) => {
			return discente.aficiones.some((aficion) => aficion === "lectura");
		});
		setMatricula(daw);
	};

	const ordenarListado = () => {
		const ordenar = [...orden].sort((a, b) => {
			const ordenado = a.apellido.localeCompare(b.apellido);
			return orden ? ordenado : -ordenado;
		});
	};

	return (
		<>
			<div>Matricula</div>
		</>
	);
};

export default Matricula;
