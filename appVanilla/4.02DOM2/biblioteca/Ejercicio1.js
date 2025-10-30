"use strict";

const remplazarContenido = () => {
	const cuerpo = document.body;
	let texto = cuerpo.innerHTML.replaceAll(
		"sexo",
		'<span class="estiloTexto">Contenido Bloqueado</span>'
	);
	cuerpo.innerHTML = texto;
};

export { remplazarContenido };
