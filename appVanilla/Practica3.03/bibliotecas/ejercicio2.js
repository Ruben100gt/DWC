"use strict";

function puntuacionMedia() {
	let puntos = 0,
		media = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (isNaN(arguments[i])) {
			return `Todos los parámetros deben ser números`;
		} else {
			puntos += arguments[i];
		}
	}
	return (media = puntos / arguments.length);
}

function mejorMedia(mediaJuan, mediaMiguel, mediaMaria) {
	let ganador,
		mediaGanadora = 0;
	if (mediaJuan == mediaMiguel) {
		return `Las medias de ambos equipos son iguales, hay un empate`;
	} else {
		mediaJuan > mediaMiguel
			? ((ganador = "Juan"), (mediaGanadora = mediaJuan))
			: ((ganador = "Miguel"), (mediaGanadora = mediaMiguel));
	}
	if (mediaMaria > mediaGanadora) {
		ganador = "María";
		mediaGanadora = mediaMaria;
	}
	return `El equipo que tiene mejor media es el de ${ganador} y su media es ${mediaGanadora}`;
}

export { puntuacionMedia };
export { mejorMedia };
