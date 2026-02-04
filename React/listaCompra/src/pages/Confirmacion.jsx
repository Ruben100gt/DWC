import React from 'react';
import './Confirmacion.css';

const Confirmacion = ({ mensaje, onConfirmar, onCancelar }) => {
	return (
		<div className="modal-overlay">
			<div className="modal-contenido">
				<h3 className="modal-titulo">Confirmación</h3>
				<p className="modal-texto">{mensaje}</p>

				<div className="modal-botones">
					<button className="btn-modal btn-cancelar" onClick={onCancelar}>
						Cancelar
					</button>
					<button className="btn-modal btn-confirmar" onClick={onConfirmar}>
						Sí, continuar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Confirmacion;
