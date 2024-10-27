import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListaPlaylists = ({ playlists }) => {
  const navigate = useNavigate();

  const handleRowClick = (nombre) => { // Función para redirigir a la página de detalles de la playlist dando click en la fila
    navigate(`/playlist/${nombre}`);
  };
if (!playlists.length) {
    return <div className='container ml-5'>No hay playlists en la lista. Crea una nueva lista de reproducción dando click en "Crear Playlist" </div>;
  }
  return ( // Componente para mostrar la lista de playlists
    <div className="container mt-5">
      <h2 className="display-5">Lista de Playlists</h2> 
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Canciones</th>
          </tr>
        </thead>
        <tbody>
          {playlists.map((playlist, index) => (
            <tr key={playlist._id} onClick={() => handleRowClick(playlist.nombre)} style={{ cursor: 'pointer' }}>
              <th scope="row">{index + 1}</th>
              <td>{playlist.nombre}</td>
              <td>{playlist.descripcion}</td>
              <td>{playlist.songs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPlaylists;