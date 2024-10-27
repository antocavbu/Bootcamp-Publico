import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DetallePlaylist = () => { // Componente para mostrar los detalles de una playlist utilizando el hook useParams
  const { nombre } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const navigate = useNavigate();

  useEffect(() => { // Función para cargar la playlist utilizando el nombre de la playlist
    const cargarPlaylist = async () => {
      try {
        const respuesta = await axios.get(`http://localhost:8080/playlist/${nombre}`);
        setPlaylist(respuesta.data);
      } catch (error) {
        console.error("Error al cargar la playlist:", error);
      }
    };

    cargarPlaylist();
  }, [nombre]);

  if (!playlist) {
    return <div>Cargando...</div>;
  }

  const handleClickSong = (title) => { // Función para redirigir a la página de detalles de la canción dando click en el nombre
    navigate(`/cancion/${title}`);
  };

  return (
    <div className="container mt-5">
      <h2>{playlist.nombre}</h2>
      <p>{playlist.descripcion}</p>
      <h3>Canciones</h3>
      <ul>
        {playlist.songs.map((song) => (
          <li key={song._id} 
              onClick={() => handleClickSong(song.title)} 
              style={{ cursor: 'pointer' }}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetallePlaylist;