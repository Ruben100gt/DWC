import React from "react";
import "./App.css";
//import Contenedor from "./Ejemplo/Contenedor.jsx";
//import Interprete from "./Ejemplo/Interprete.jsx";
//import Pelicula from "./Ejemplo/Pelicula.jsx";
import StateListado from "./componentes/3.08UseState/StateListado.jsx";
import ContadorLimite from "./componentes/3.08UseState/ContadorLimite.jsx";
import ContadorLikes from "./componentes/3.08UseState/ContadorLikes.jsx";
import Matricula from "./componentes/3.09UseState/Matricula.jsx";
import Pelicula from "./componentes/4.05UseRef/Pelicula.jsx";
import Contenedor from "./componentes/4.05UseRef/Contenedor.jsx";
import Interprete from "./componentes/4.05UseRef/Interprete.jsx";
import Taquilla from "./componentes/4.05UseRef/Taquilla.jsx";

//Práctica 4.05
function App() {
	let ancho = 300;

	return (
		<>
			<>
				<Contenedor>
					<Pelicula
						cartela="https://dx35vtwkllhj9.cloudfront.net/universalstudios/jurassic-world-rebirth/images/regions/us/updates1/header_HE.jpg"
						título="Jurassic World Rebirth"
						direccion="Gareth Edwards"
						descripcion="La trama sigue a Zora Bennett (Scarlett Johansson), una exmilitar, y
						al paleontólogo Dr. Henry Loomis (Jonathan Bailey) en una misión
						secreta para obtener el ADN de tres colosales criaturas prehistóricas,
						clave para una cura médica."
					>
						<Interprete
							nombre="Scarlett Johansson"
							foto="https://hips.hearstapps.com/hmg-prod/images/scarlett-johansson-689bc8c7bde63.jpg?crop=1xw:0.9996749024707412xh;center,top&resize=1200:*"
							biografia="Scarlett Johansson es una actriz estadounidense nacida en Nueva York
						el 22 de noviembre de 1984, conocida por su versatilidad en películas
						como Perdidos en Tokio (2003), Historia de un matrimonio (2019) y su
						papel de Black Widow en el universo Marvel."
						></Interprete>
						<Interprete
							nombre="Mahershala Ali"
							foto="https://m.media-amazon.com/images/M/MV5BMzBhZTM4ZTMtYzYwMi00ZGQwLTljNDEtZTVlNjYwYTZiODEzXkEyXkFqcGc@._V1_.jpg"
							biografia="Mahershala Ali es un actor estadounidense nacido en Oakland,
						California, el 16 de febrero de 1974. Es conocido por ganar dos
						Premios Óscar como Mejor Actor de Reparto por las películas Moonlight
						y Green Book. Su carrera comenzó en la televisión en series como
						Crossing Jordan y The 4400, para luego destacar en House of Cards y
						películas como The Hunger Games y The Curious Case of Benjamin Button."
						></Interprete>
						<Interprete
							nombre="Ed Skrein"
							foto="https://upload.wikimedia.org/wikipedia/commons/6/6b/Ed_Skrein_by_Gage_Skidmore.jpg"
							biografia="Ed Skrein es un actor, director y rapero inglés, nacido en Londres en
						1983, que se dio a conocer por su papel de Daario Naharis en Juego de
						Tronos y, especialmente, como el supervillano Ajax en la película
						Deadpool."
						></Interprete>
					</Pelicula>
				</Contenedor>
			</>
		</>
	);
}
//Práctica 3.09
/* function App() {
	let ancho = 300;

	return (
		<>
			<Matricula />
		</>
	);
} */

//Práctica 3.08
/* function App() {
	let ancho = 300;

	return (
		<>
			<StateListado />
			<ContadorLimite />
			<ContadorLikes />
		</>
	);
} */

//Ejemplo Pelicula
/* function App() {
	return (
		<>
			<Contenedor>
				Este es el texto del contenedor.
				<Pelicula
					cartela="https://dx35vtwkllhj9.cloudfront.net/universalstudios/jurassic-world-rebirth/images/regions/us/updates1/header_HE.jpg"
					título="Jurassic World Rebirth"
					direccion="Gareth Edwards"
				>
					"La trama sigue a Zora Bennett (Scarlett Johansson), una exmilitar, y
					al paleontólogo Dr. Henry Loomis (Jonathan Bailey) en una misión
					secreta para obtener el ADN de tres colosales criaturas prehistóricas,
					clave para una cura médica."
				</Pelicula>
				<Interprete
					nombre="Scarlett Johansson"
					foto="https://hips.hearstapps.com/hmg-prod/images/scarlett-johansson-689bc8c7bde63.jpg?crop=1xw:0.9996749024707412xh;center,top&resize=1200:*"
				>
					Scarlett Johansson es una actriz estadounidense nacida en Nueva York
					el 22 de noviembre de 1984, conocida por su versatilidad en películas
					como Perdidos en Tokio (2003), Historia de un matrimonio (2019) y su
					papel de Black Widow en el universo Marvel.
				</Interprete>
				<Interprete
					nombre="Mahershala Ali"
					foto="https://m.media-amazon.com/images/M/MV5BMzBhZTM4ZTMtYzYwMi00ZGQwLTljNDEtZTVlNjYwYTZiODEzXkEyXkFqcGc@._V1_.jpg"
				>
					Mahershala Ali es un actor estadounidense nacido en Oakland,
					California, el 16 de febrero de 1974. Es conocido por ganar dos
					Premios Óscar como Mejor Actor de Reparto por las películas Moonlight
					y Green Book. Su carrera comenzó en la televisión en series como
					Crossing Jordan y The 4400, para luego destacar en House of Cards y
					películas como The Hunger Games y The Curious Case of Benjamin Button.
				</Interprete>
				<Interprete
					nombre="Ed Skrein"
					foto="https://upload.wikimedia.org/wikipedia/commons/6/6b/Ed_Skrein_by_Gage_Skidmore.jpg"
				>
					Ed Skrein es un actor, director y rapero inglés, nacido en Londres en
					1983, que se dio a conocer por su papel de Daario Naharis en Juego de
					Tronos y, especialmente, como el supervillano Ajax en la película
					Deadpool.
				</Interprete>
			</Contenedor>
		</>
	);
} */

export default App;
