"use strict";

const remplazarContenido = () => {
	const cuerpo = document.body;
	let texto = cuerpo.innerHTML.replaceAll("sexo", "Contenido Bloqueado");
	cuerpo.innerHTML = texto;
};

export { remplazarContenido };
