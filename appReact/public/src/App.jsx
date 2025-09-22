import React from "react";
import "./App.css";
import Contenedor from "./components/Contenedor.jsx";
import Interprete from "./components/Interprete.jsx";

function App() {
	// Código JavaScript Vanilla.
	let ancho = 300;

	return (
		<>
			<Contenedor>Este es el texto del children del contenedor.</Contenedor>

			<Pelicula
				cartela="https://static.wikia.nocookie.net/jurassicpark/images/e/ef/Jurassic_World_Rebirth_Logo_2025.png/revision/latest?cb=20240907151115&path-prefix=es"
				título="Jurassic World Rebirth"
				dirección="Gareth Edwards"
			>
				"La trama sigue a Zora Bennett (Scarlett Johansson), una exmilitar, y al
				paleontólogo Dr. Henry Loomis (Jonathan Bailey) en una misión secreta
				para obtener el ADN de tres colosales criaturas prehistóricas, clave
				para una cura médica."
			</Pelicula>
			<Interprete
				nombre="Scarlett Johansson"
				foto="https://hips.hearstapps.com/hmg-prod/images/scarlett-johansson-689bc8c7bde63.jpg?crop=1xw:0.9996749024707412xh;center,top&resize=1200:*"
			>
				Scarlett Johansson es una actriz estadounidense nacida en Nueva York el
				22 de noviembre de 1984, conocida por su versatilidad en películas como
				Perdidos en Tokio (2003), Historia de un matrimonio (2019) y su papel de
				Black Widow en el universo Marvel.
			</Interprete>
			<Interprete
				nombre="Mahershala Ali"
				foto="https://m.media-amazon.com/images/M/MV5BMzBhZTM4ZTMtYzYwMi00ZGQwLTljNDEtZTVlNjYwYTZiODEzXkEyXkFqcGc@._V1_.jpg"
			>
				Mahershala Ali es un actor estadounidense nacido en Oakland, California,
				el 16 de febrero de 1974. Es conocido por ganar dos Premios Óscar como
				Mejor Actor de Reparto por las películas Moonlight y Green Book. Su
				carrera comenzó en la televisión en series como Crossing Jordan y The
				4400, para luego destacar en House of Cards y películas como The Hunger
				Games y The Curious Case of Benjamin Button.
			</Interprete>
			<Interprete
				nombre="Ed Skrein"
				foto="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/ee/Ed_Skrein.png/revision/latest?cb=20240806175043&path-prefix=es"
			>
				Ed Skrein es un actor, director y rapero inglés, nacido en Londres en
				1983, que se dio a conocer por su papel de Daario Naharis en Juego de
				Tronos y, especialmente, como el supervillano Ajax en la película
				Deadpool.
			</Interprete>
		</>
	);
}

export default App;
