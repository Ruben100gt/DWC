import React, { useState } from 'react';
import './Discentes.css';

const Discentes = ({ listadoDiscentes, desmatricular, modoDesmatricular }) => {
	return (
		<div>
			{Array.isArray(listadoDiscentes) && listadoDiscentes.length ? (
				listadoDiscentes.map((discente, indice) => (
					<div
						className="discente-caja"
						key={discente.id}
						id={indice}
						onClick={() => {
							if (modoDesmatricular) desmatricular(indice);
						}}
					>
						<p>Nombre: {discente.nombre}</p>
						<p>Apellidos: {discente.apellidos}</p>
						<p>Curso: {discente.curso}</p>
						<p>Aficiones: {discente.aficiones}</p>
						<p>Comida: {discente.comida}</p>
					</div>
				))
			) : (
				<p>No quedan discentes.</p>
			)}
		</div>
	);
};

export default Discentes;
