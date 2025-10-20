"use strict";

//Creamos la variable numero de imagen fuera para que en la recursividad no vuelva el número a 0.
let numImagen = 0;

const imagenes = () => {
	let todasLasImagenes = [
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LYI5RZWa7OxwS0sibZUeVM6PtxllrRolIg&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0gAId9buMttn-AQBe0blrxVDBRa8WsexTUl_77B0dX-w6IQFhGUJUj78mtSD4bKNSQ8&usqp=CAU",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMQhIqJwcy0s-LOjpgxPFKA3bnBU0RIjE8zUDuu1L-TLtuKe8QESslUreTl6P6b4xzHQ&usqp=CAU",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5xGRoX6PofPsSRDo4r16_1xOAHq_0ZsS5CERvsx5Vmw3a4IL_HJEDvksyWonpukt4EHs&usqp=CAU",
	];

	document.body.insertAdjacentHTML("beforeend", '<div><img id="img1"></div>');
	const imagen = document.getElementsById("img1");
	imagen.src = todasLasImagenes[numImagen];
	if (numImagen < todasLasImagenes.length) {
		numImagen++;
	} else {
		numImagen = 0;
	}
	setInterval(() => {
		imagenes();
	}, 2000);
};

export { imagenes };
