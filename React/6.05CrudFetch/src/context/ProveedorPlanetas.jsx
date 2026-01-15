import React, { useState, useEffect, createContext } from "react";
import { traerDatosBien } from "../libraries/traerDatos.js";

/*****************************************************************************************
 * Contextos en React.
 *
 * Dará acceso a un conjunto de componentes (children) a todo
 * lo contenido en el contexto ya sean variables, estados o funciones.
 *
 * Será necesario hacer tres cosas:
 *    ->  crear el contexto con la función createContext y dotarlo de contenido a compartir,
 *    ->  crea un proveedor (componente) que se encargará de compartir la información y
 *    ->  utilizar useContext para usar el contexto en aquellos componentes que lo necesiten.
 *
 */

/** Se crea el contexto con el método createContext()
 * Es necesario que sea de ámbito global, por lo que debe declararse fuera del componente.
 */
const ContextoPlanetas = createContext();

const ProveedorPlanetas = ({ children }) => {
  // Estado al que accederán los componentes dentro del contexto.
  const [planetas, setPlanetas] = useState([]);
  const [error, setError] = useState("");

  // URL de los planetas.
  const urlPlanetas = "https://swapi.dev/api/planets";

  // Función para obtener el listado de planetas.
  const traerPlanetas = async (endPoint) => {
    try {
      const planetasDatos = await traerDatosBien(endPoint);
      setPlanetas(planetasDatos);
    } catch (error) {
      // Se gestiona el error de forma adecuada.
      console.log(`Error en traerPlanetas: ${error.message}`);
      setError("Error en planetas");
    }
  };

  const borrarPlanetas = () => {
    setPlanetas([]);
  };

  const cambiarError = (mensaje) => {
    setError(mensaje);
  };

  useEffect(() => {
    // Se cargan los planetas en el montaje del componente.
    traerPlanetas(urlPlanetas);
  }, []);

  const Feo = "Hola, feo";

  const objeto = {
    nombre: "Feo",
    apellidos: "Horrible",
  };

  //¿Qué es lo que va a compartir el contexto? Un objeto de cosas.
  const cosasParaExportar = {
    planetas,
    borrarPlanetas,
    error,
    cambiarError,
    Feo,
    objeto,
  };

  return (
    // Todos los hijos de este componente tendrán acceso al objeto cosasParaExportar.
    <ContextoPlanetas value={cosasParaExportar}>{children}</ContextoPlanetas>
  );
};
// Se exporta el componente por defecto (como siempre).
export default ProveedorPlanetas;
// Se exporta, además, el contexto para ser usado por los componentes hijos.
export { ContextoPlanetas };
