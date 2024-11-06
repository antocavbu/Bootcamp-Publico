import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePlaylist, getPlaylistById } from '../api/playlistsServices.js';
import '../styles/Songs.css';

const EditPlaylist = ({ setPlaylists, songs }) => {
  const [name, setName] = useState('');
  const [selectedSongs, setSelectedSongs] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const playlist = await getPlaylistById(id);
        setName(playlist.name);
        setSelectedSongs(playlist.songs.map(song => song._id));
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };
    fetchPlaylist();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedPlaylist = await updatePlaylist(id, { name, songs: selectedSongs });
      setPlaylists(prevPlaylists => prevPlaylists.map(p => (p._id === id ? updatedPlaylist : p)));
      alert('Playlist actualizada exitosamente');
      setError(null);
      navigate(`/playlist/${id}`);
    } catch (error) {
      setError(error.response.data.message || 'Error adding playlist');
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
    <form onSubmit={handleSubmit} className='form-container'>
      <h1>Editar Playlist</h1>
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
                  checked={selectedSongs.includes(song._id)}
                  onChange={handleSongChange}
                />
                {song.title} - {song.artist}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button type="submit" className='edit-item'>Actualizar </button>
    </form>
  );
};

export default EditPlaylist;