import React, { useState } from 'react';
import discentes from './matriculados.json';
import Discentes from './Discentes.jsx';
import './Matricula.css';

const Matricula = () => {
	const [listadoDiscentes, setMatricula] = useState(discentes.discentes);
	const [orden, setOrden] = useState(true);
	const [modoDesmatricular, setModoDesmatricular] = useState(false);

	const listadoInicial = () => {
		setMatricula(discentes.discentes);
	};

	const discentes2DAW = () => {
		const daw2 = listadoDiscentes.filter((discente) => {
			return discente.curso === '2DAW';
		});
		setMatricula(daw2);
	};

	const discentes1curso = () => {
		const curso1 = listadoDiscentes.filter((discente) => {
			return discente.curso.includes('1');
		});
		setMatricula(curso1);
	};

	const discentesDAW = () => {
		const daw = listadoDiscentes.filter((discente) => {
			return discente.curso.includes('DAW');
		});
		setMatricula(daw);
	};

	const discenteslectura = () => {
		const lectura = listadoDiscentes.filter((discente) => {
			return discente.aficiones.some((aficion) => aficion === 'lectura');
		});
		setMatricula(lectura);
	};

	const ordenarListado = () => {
		const ordenar = [...listadoDiscentes].sort((a, b) => {
			return orden ? a.apellidos.localeCompare(b.apellidos) : b.apellidos.localeCompare(a.apellidos);
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
			<div className="botones">
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
				<button onClick={() => setModoDesmatricular(!modoDesmatricular)}>
					{modoDesmatricular ? 'Desactivar desmatricular' : 'Activar desmatricular'}
				</button>
			</div>
			<Discentes
				listadoDiscentes={listadoDiscentes}
				desmatricular={desmatricular}
				modoDesmatricular={modoDesmatricular}
			/>
		</>
	);
};

export default Matricula;
