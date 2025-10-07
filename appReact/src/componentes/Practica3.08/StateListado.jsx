import React from "react";

const Listado = () => {
	const valorInicial = [];

	const [listado, setListado] = useState(valorInicial);

	const generarNumeroAleatorio = () => {
		return Math.fllor(Math.random() * 100 + 1);
	};

	return <div>Listado</div>;
};

export default Listado;
