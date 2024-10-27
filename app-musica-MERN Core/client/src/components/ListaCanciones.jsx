import React, { useState } from 'react';
import axios from 'axios';

const ListaCanciones = ({ canciones, playlists }) => { //
  const [selectedPlaylists, setSelectedPlaylists] = useState({});

  const handlePlaylistChange = (cancionId, event) => {
    setSelectedPlaylists({
      ...selectedPlaylists,
      [cancionId]: event.target.value,
    });
  };

  const handleAddToPlaylist = async (cancion) => {
    const selectedPlaylist = selectedPlaylists[cancion._id];
    if (!selectedPlaylist) {
      alert('Por favor, selecciona una playlist');
      return;
    }

    try {
      await axios.put(`http://localhost:8080/playlist/${selectedPlaylist}/songs`, {
        songs: [{ 
            title: cancion.title,
            artist: cancion.artist,
            year: cancion.year,
            genre: cancion.genre,
        }],
      });
      alert('Canción agregada a la playlist exitosamente');
    } catch (error) {
      console.error('Error al agregar la canción a la playlist:', error);
      alert('Error al agregar la canción a la playlist');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Lista de Canciones</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Título</th>
            <th scope="col">Artista</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {canciones.map((cancion, index) => (
            <tr key={cancion._id}>
              <th scope="row">{index + 1}</th>
              <td>{cancion.title}</td>
              <td>{cancion.artist}</td>
              <td>
                <select className='form-select'
                        onChange={(event) => handlePlaylistChange(cancion._id, event)}
                          value={selectedPlaylists[cancion._id] || ''}
                >
                  <option value="">Selecciona una playlist</option>
                  {playlists.map((playlist) => (
                    <option key={playlist._id} value={playlist.nombre}>
                      {playlist.nombre}
                    </option>
                  ))}
                </select>
                <button className="btn btn-primary m-1" onClick={() => handleAddToPlaylist(cancion)}>Agregar a Playlist</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaCanciones;