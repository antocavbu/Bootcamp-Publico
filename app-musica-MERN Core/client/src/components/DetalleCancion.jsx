import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetalleCancion = () => { // Componente para mostrar los detalles de una canción utilizando el hook useParams
  const { title } = useParams();
  const [cancion, setCancion] = useState(null);

  useEffect(() => {
    const cargarCancion = async () => { // Función para cargar la canción utilizando el título de la canción
      try {
        const respuesta = await axios.get(`http://localhost:8080/song/${title}`);
        setCancion(respuesta.data);
      } catch (error) {
        console.error("Error al cargar la canción:", error);
      }
    };

    cargarCancion();
  }, [title]);

  if (!cancion) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{cancion.title}</h2>
      <p><strong>Artista:</strong> {cancion.artist}</p>
      <p><strong>Año:</strong> {cancion.year}</p>
      <p><strong>Género:</strong> {cancion.genre}</p>
    </div>
  );
};

export default DetalleCancion;