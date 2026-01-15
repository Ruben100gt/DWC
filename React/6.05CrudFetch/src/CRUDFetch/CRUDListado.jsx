import React from "react";
import ValorEstado from "../tools/ValorEstado.jsx";
import useDiscentes from "../../hooks/useDiscentes.js";

const CRUDListado = () => {
  /**
   * Consumir el contexto a través de un hook personalizado.
   *  -> importar el hook y
   *  -> desestructurar el objeto que devuelve (igual que con createContext).
   */
  const { discentes, cargando } = useDiscentes();

  return <>{cargando ? "Cargando..." : <ValorEstado estado={discentes} />}</>;
};

export default CRUDListado;
