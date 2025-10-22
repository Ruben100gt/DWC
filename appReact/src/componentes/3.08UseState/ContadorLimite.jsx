import React, { useState } from 'react';
import './ContadorLimite.css';

const ContadorLimite = () => {
	const [contador, setContador] = useState(0);

	const incrementar = () => {
		if (contador < 10) {
			setContador(contador + 1);
		}
	};

	const decrementar = () => {
		if (contador > 0) {
			setContador(contador - 1);
		}
	};

	return (
		<>
			<h2>Contador con límite</h2>
			<div className="numero-div">Número: {contador}</div>
			<button
				onClick={() => {
					incrementar();
				}}
				disabled={contador === 10}
			>
				Incrementar
			</button>
			<button
				onClick={() => {
					decrementar();
				}}
				disabled={contador === 0}
			>
				Decrementar
			</button>
		</>
	);
};

export default ContadorLimite;
