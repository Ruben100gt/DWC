import React, { useState } from 'react';
import './StateListado.css';

const StateListado = () => {
	const valorInicial = [];

	const [listado, setListado] = useState(valorInicial);

	const generarNumeroAleatorio = () => {
		return Math.floor(Math.random() * 100 + 1);
	};

	const anyadirNumeroAleatorio = () => {
		let num = generarNumeroAleatorio();

		//Comprobamos que el número no se repita
		if (listado.includes(num)) {
			anyadirNumeroAleatorio();
		} else {
			setListado([...listado, num]);
		}
	};

	const eliminarListado = () => {
		setListado([]);
	};

	return (
		<>
			<h2>Listado</h2>
			<p>
				<button
					onClick={() => {
						anyadirNumeroAleatorio();
					}}
				>
					Generar
				</button>
				<button
					onClick={() => {
						eliminarListado();
					}}
				>
					Eliminar
				</button>
			</p>
			<div className="listado-div">
				{Array.isArray(listado) && listado.length
					? listado.map((numero, indice) => {
							// Uso el randomUUID como key.
							return <p key={crypto.randomUUID()}>{numero}</p>;
					  })
					: 'No hay números.'}
			</div>
		</>
	);
};

export default StateListado;
