"use strict";

const formatearDinero = (cantidad) => {
	return new Intl.NumberFormat("es-ES", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
	}).format(cantidad);
};

export { formatearDinero };
