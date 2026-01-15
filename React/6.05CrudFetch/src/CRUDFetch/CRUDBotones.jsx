import React from "react";
// Se importa el contexto (la caja) para acceder a sus datos.
import useDiscentes from "../../hooks/useDiscentes.js";

/**
 * Consumir el contexto a través de un hook personalizado.
 *  -> importar el hook y
 *  -> desestructurar el objeto que devuelve (igual que con createContext).
 */

const CRUDBotones = () => {
  /**
   * Objeto con un discente nuevo:
   *  -> en la versión real se obtendrá desde un formulario controlado,
   *  -> NUNCA se le pregunta (ni muestra) el id al usuario (se genera un UUID).
   */

  const discenteNuevo = {
    id: "5",
    nombre: "Feo2",
    apellidos: "De verdad",
    curso: "2DAW",
    modulos: "DWC",
    aficiones: "Cazar libélulas",
    comida: "Macarrones con chorizo",
  };

  /**
   * Objetos con datos modificados:
   *  -> en la versión real se obtienen lo datos desde un formulario controlado,
   *  -> NUNCA se actualiza el id (se corre el riesgo de perder referencias en la BBDD).
   */

  const discenteEditado = {
    id: "5",
    nombre: "Feo2 actualizado",
    apellidos: "De verdad actualizado",
    curso: "2DAW actualizado",
    modulos: "DWC actualizado",
    aficiones: "Cazar gamusinos actualizado",
    comida: "Macarrones actualizado",
  };

  const discenteParcial = {
    nombre: "Muy Feo2",
    apellidos: "En serio",
  };

  /**
   * Se obtiene lo necesario del contexto.
   */

  const {
    cargarDiscentes,
    obtenerDiscentes,
    guardarDiscente,
    editarDiscenteCompleto,
    editarDiscenteParcial,
    borrarDiscente,
  } = useDiscentes();

  return (
    <>
      <div>
        <button
          onClick={async (evento) => {
            await guardarDiscente(discenteNuevo);
            //cargarDiscentes();
          }}
        >
          Guardar discente
        </button>
        <button
          onClick={async (evento) => {
            await borrarDiscente("5");
            //cargarDiscentes();
          }}
        >
          Borrar discente
        </button>
        <button
          onClick={async () => {
            await editarDiscenteCompleto("5", discenteEditado);
            //cargarDiscentes();
          }}
        >
          Actualizar discente completo
        </button>
        <button
          onClick={async () => {
            await editarDiscenteParcial("5", discenteParcial);
            //cargarDiscentes();
          }}
        >
          Actualizar discente parcial
        </button>
      </div>
    </>
  );
};

export default CRUDBotones;
