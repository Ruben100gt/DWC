import React from 'react';
import useNotificacion from '../hooks/useNotificacion';
import './Notificaciones.css';

const Notificaciones = () => {
	const { lista } = useNotificacion();

	if (!lista || lista.length === 0) return null;

	return (
		<div className="notificaciones-wrapper">
			{lista.map((item) => (
				<div key={item.id} className={`alerta-item tipo-${item.tipo}`}>
					<div className="alerta-icono">
						{item.tipo === 'error' ? (
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						) : (
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
						)}
					</div>

					<div className="alerta-contenido">
						<span className="alerta-mensaje">{item.mensaje}</span>
					</div>

					<div className="alerta-barra" />
				</div>
			))}
		</div>
	);
};

export default Notificaciones;
