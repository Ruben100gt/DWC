import { useContext } from "react";
import { contextoProductos } from "../context/ProveedorProductos";

const useProductos = () => {
	const contexto = useContext(contextoProductos);

	if (!contexto) {
		throw new Error(
			"El hook useProductos debe ser utilizado dentro de <ProveedorProductos>.",
		);
	}

	return contexto;
};

export default useProductos;
