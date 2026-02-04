import { useContext } from 'react';
import { contextoNotificaciones } from '../context/ProveedorNotificaciones.jsx';

const useNotificacion = () => {
	const contexto = useContext(contextoNotificaciones);
	if (!contexto) {
		throw new Error('useNotificacion debe usarse dentro de <ProveedorNotificaciones>');
	}
	return contexto;
};

export default useNotificacion;
