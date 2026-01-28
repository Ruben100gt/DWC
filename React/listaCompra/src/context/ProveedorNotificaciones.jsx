import React, { createContext, useState, useContext } from "react";

const contextoNotificaciones = createContext();

const ProveedorNotificaciones = ({ children }) => {
	const [mensaje, setMensaje] = useState("");

	const mostrarAviso = (texto) => {
		setMensaje(texto);
		//Notificamos durante 3 segundos
		setTimeout(() => setMensaje(""), 3000);
	};

	return (
		<contextoNotificaciones.Provider value={{ mostrarAviso }}>
			{children}
			{mensaje && <div className="notificacion-flotante">{mensaje}</div>}
		</contextoNotificaciones.Provider>
	);
};

export default ProveedorNotificaciones;
export { contextoNotificaciones };
