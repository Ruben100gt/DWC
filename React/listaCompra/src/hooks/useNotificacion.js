import { useContext } from "react";
import { contextoNotificaciones } from "../context/ProveedorNotificaciones.jsx";

const useNotificaciones = () => {
	const contexto = useContext(contextoNotificaciones);
	if (!contexto) {
		throw new Error(
			"useNotificaciones debe usarse dentro de <ProveedorNotificaciones>.",
		);
	}
	return contexto;
};

export default useNotificaciones;
