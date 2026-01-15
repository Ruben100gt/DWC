import React, { useState, useEffect, createContext } from "react";
import useAPI from "../hooks/useAPI.js";

/**
 * Se crea el contexto (la caja) a proveer.
 */
const ContextoDiscentes = createContext();

const ProveedorDiscentes = ({ children }) => {
  const [discentes, setDiscentes] = useState([]);

  /**
   * Constante con la URL de la API.
   * */
  const API_URL = "http://localhost:3000/discentes";

  /**
   * Listado de datos del servidor (nada nuevo).
   */

  const { obtener, guardar, borrar, editarPUT, editarPATCH, cargando, error } =
    useAPI();

  const obtenerDiscentes_OLD = async () => {
    try {
      const respuesta = await fetch(API_URL);
      if (!respuesta.ok) {
        throw new Error(
          `Error en traerDiscentes: ${respuesta.status} - ${respuesta.statusText}`
        );
      }
      const datos = await respuesta.json();
      // Se devuelven los datos en lugar de modificar el estado directamente.
      return datos;
    } catch (error) {
      throw error;
    }
  };

  const obtenerDiscentes = async () => {
    try {
      const datos = await obtener(API_URL);
      setDiscentes(datos);
    } catch (error) {
      throw error;
    }
  };

  /** Obtención de datos desde un formulario.
   *
   *   -> En Vanilla se puede construir directamente cogiendo los datos desde formulario
   *       uno a uno (si son pocos):
   *       const datosNuevos = {
   *     		email: document.getElementById('nombre').value,
   *         comentarios: document.getElementById('apellidos').value
   *       }
   *
   *   -> O de una sola vez con FormData:
   *     const datosNuevos = new FormData(document.getElementById('formulario-discente'));
   *
   *   -> En React siempre se trabajará con estados (recuerda que todos los formularios deben ser controlados).
   *
   */

  const guardarDiscente_OLD = async (datos) => {
    try {
      const respuesta = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error(
          `Error en guardarDiscentes: ${respuesta.status} - ${respuesta.statusText}`
        );
      }
    } catch (error) {
      throw error;
    }
  };

  const guardarDiscente = async (datos) => {
    try {
      const respuesta = await guardar(API_URL, datos);
      console.log(respuesta);
      obtenerDiscentes();
      //setDiscentes(...discentes, datos);
    } catch (error) {
      throw error;
    }
  };

  /**
   * Es necesario, además de la URL, el id del discente a eliminar.
   */

  const borrarDiscente_OLD = async (id) => {
    try {
      const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!respuesta.ok) {
        throw new Error(
          `Error en guardarDiscentes: ${respuesta.status} - ${respuesta.statusText}`
        );
      }
    } catch (error) {
      throw error;
    }
  };

  const borrarDiscente = async (id) => {
    try {
      const respuesta = await borrar(`${API_URL}/${id}`);
      obtenerDiscentes();
    } catch (error) {
      throw error;
    }
  };

  /**
   * El flujo para esta acción es:
   *  -> se obtienen los datos de un discentes,
   *  -> se meten en un estado que controla un formulario,
   *  -> se recogen los datos del formulario (se comprueban),
   *      se actualizan en la BBDD (total o parcialmente) y
   *  -> se informa al/la usuario/a de forma correcta.
   */

  const editarDiscenteCompleto_OLD = async (id, datos) => {
    try {
      const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error(
          `Error en editarDiscentesCompleto: ${respuesta.status} - ${respuesta.statusText}`
        );
        obtenerDiscentes();
      }
    } catch (error) {
      throw error;
    }
  };

  const editarDiscenteCompleto = async (id, datos) => {
    try {
      const respuesta = await editarPUT(`${API_URL}/${id}`, datos);
      obtenerDiscentes();
    } catch (error) {
      throw error;
    }
  };

  const editarDiscenteParcial_OLD = async (id, datos) => {
    try {
      const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error(
          `Error en editarDiscentesParcial: ${respuesta.status} - ${respuesta.statusText}`
        );
      }
    } catch (error) {
      throw error;
    }
  };

  const editarDiscenteParcial = async (id, datos) => {
    try {
      const respuesta = await editarPATCH(`${API_URL}/${id}`, datos);
      obtenerDiscentes();
    } catch (error) {
      throw error;
    }
  };

  /**
   * Función asíncrona para ejecutarse en el montaje del componente.
   * Se encapsula el setter del estado en una función
   * para que el contexto mantenga el control del estado.
   */

  useEffect(() => {
    obtenerDiscentes();
  }, []);

  /**
   * Pregunta de diseño.
   * Tras cada modificación, creación o elimincación de los datos
   * ¿es preferible volver a traer los datos o modificar el estado local?
   */
  const datosAProveer = {
    discentes,
    obtenerDiscentes,
    guardarDiscente,
    borrarDiscente,
    editarDiscenteCompleto,
    editarDiscenteParcial,
    cargando,
    error,
  };

  return (
    <>
      <ContextoDiscentes.Provider value={datosAProveer}>
        {children}
      </ContextoDiscentes.Provider>
    </>
  );
};

export default ProveedorDiscentes;
export { ContextoDiscentes };
