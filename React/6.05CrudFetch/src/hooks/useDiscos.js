import React, { useContext } from 'react';
import { ContextoDiscos } from '../context/ProveedorDiscos.jsx';

const useDiscos = () => {
	const contexto = useContext(ContextoDiscos);

	if (!contexto) {
		throw new Error('El hook useDiscos debe ser utilizado dentro de <ProveedorDiscos>.');
	}

	return contexto;
};

export default useDiscos;
