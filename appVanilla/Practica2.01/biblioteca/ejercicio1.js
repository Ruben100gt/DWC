"use strict";

const calcularIMC = (masaMarcos, alturaMarcos, masaJuan, alturaJuan) => {
	let IMCMayor;
	if (
		isNaN(masaMarcos) ||
		isNaN(alturaMarcos) ||
		isNaN(masaJuan) ||
		isNaN(alturaJuan)
	) {
		return `Todos los datos deben ser números.`;
	} else {
		let IMCMarcos = masaMarcos / (alturaMarcos * alturaMarcos);
		let IMCJuan = masaJuan / (alturaJuan * alturaJuan);
		IMCMayor = IMCMarcos > IMCJuan;
	}
	return `Tiene Marcos un IMC mayor que el de Juan?: ${IMCMayor}`;
};

export { calcularIMC };
