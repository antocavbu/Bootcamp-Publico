import React, { useState } from 'react';
import '../styles/Songs.css';
import { createSong } from '../api/songsServices.js';
import { useNavigate } from 'react-router-dom';

const CrearSongs = ({ setSongs }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newSong = await createSong({ title, artist, album, genre, year });
      setSongs(prevSongs => [...prevSongs, newSong]);
      setTitle('');
      setArtist('');
      setAlbum('');
      setGenre('');
      setYear('');
      setError(null);
      navigate('/songs');
    } catch (error) {
      console.error('Error adding song:', error);
      setError(error.response?.data?.message || 'Error adding song');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div className="form-group">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="artist">Artista:</label>
        <input
          type="text"
          id="artist"
          value={artist}
          onChange={event => setArtist(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="album">Álbum:</label>
        <input
          type="text"
          id="album"
          value={album}
          onChange={event => setAlbum(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Género:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={event => setGenre(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Año:</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={event => setYear(event.target.value)}
          required
        />
      </div>
      
      <button type="submit">Crear canción</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default CrearSongs;