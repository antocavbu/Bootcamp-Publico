import React, { useState } from 'react';
import '../styles/Songs.css'; 
import { createPlaylist } from '../api/playlistsServices.js';
import { useNavigate } from 'react-router-dom';


const CrearPlaylist = ({ songs, playlists, setPlaylists }) => {
  const [name, setName] = useState('');
  const [selectedSongs, setSelectedSongs] = useState([]);
  const navegar = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newPlaylist = await createPlaylist({ name, songs: selectedSongs });
      setPlaylists([...(playlists ?? []), newPlaylist]);
      setName('');
      setSelectedSongs([]);
      setError(null);
      navegar('/playlist');
    } catch (error) {
      setError(error.response?.data?.message || 'Error adding playlist');
    }
  };

  const handleSongChange = (event) => {
    const songId = event.target.value;
    setSelectedSongs((prevSelectedSongs) => {
      if (prevSelectedSongs.includes(songId)) {
        return prevSelectedSongs.filter(id => id !== songId);
      } else {
        return [...prevSelectedSongs, songId];
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Crear Playlist</h2>
      <div className="form-group">
        <label htmlFor="playlistName">Nombre de la playlist:</label>
        <input
          type="text"
          id="playlistName"
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Canciones:</label>
        <ul>
          {songs.map(song => (
            <li key={song._id} className="form-group-checkbox">
              <label>
                <input
                  type="checkbox"
                  value={song._id}
                  onChange={handleSongChange}
                />
                {song.title} - {song.artist}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className ="botones-container">
        <button className ="edit-item" type="submit">Crear playlist</button>
      </div>
    </form>
  );
};

export default CrearPlaylist;