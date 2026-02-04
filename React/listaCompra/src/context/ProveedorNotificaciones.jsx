import React, { useState, createContext } from 'react';

const contextoNotificaciones = createContext();

const ProveedorNotificaciones = ({ children }) => {
	const [lista, setLista] = useState([]);

	const notificacion = (mensaje, tipo = 'exito') => {
		const id = Date.now();
		const nuevaAlerta = { id, mensaje, tipo };

		setLista((prev) => [...prev, nuevaAlerta]);

		setTimeout(() => {
			setLista((prev) => prev.filter((item) => item.id !== id));
		}, 3000);
	};

	return <contextoNotificaciones.Provider value={{ lista, notificacion }}>{children}</contextoNotificaciones.Provider>;
};

export { contextoNotificaciones };
export default ProveedorNotificaciones;
