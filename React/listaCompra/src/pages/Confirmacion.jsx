import React from 'react';
import './Confirmacion.css';

const Confirmacion = ({ mensaje, onConfirmar, onCancelar }) => {
	return (
		<div className="confirmacion-overlay">
			<div className="confirmacion-contenido">
				<h3 className="confirmacion-titulo">Confirmación</h3>
				<p className="confirmacion-texto">{mensaje}</p>

				<div className="confirmacion-botones">
					<button className="btn-confirmacion btn-cancelar" onClick={onCancelar}>
						Cancelar
					</button>
					<button className="btn-confirmacion btn-aceptar" onClick={onConfirmar}>
						Confirmar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Confirmacion;
