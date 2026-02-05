import { useContext } from "react";
import { contextoListas } from "../context/ProveedorListas";

const useListas = () => {
	const contexto = useContext(contextoListas);

	if (!contexto) {
		throw new Error(
			"El hook useListaCompra debe ser utilizado dentro de <ProveedorListaCompra>.",
		);
	}

	return contexto;
};

export default useListas;
