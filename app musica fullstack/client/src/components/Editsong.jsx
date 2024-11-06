import { useParams } from 'react-router-dom';
import { updateSong, getSongById } from '../api/songsServices.js';
import '../styles/Songs.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Editsong = ({ setSongs }) => {
  const { id } = useParams();
  const [song, setSong] = useState({
    title: '',
    artist: '',
    genre: '',
    year: ''
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const songData = await getSongById(id);
        setSong(songData);
      } catch (error) {
        console.error('Error fetching song:', error);
      }
    };
    fetchSong();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSong((prevSong) => ({ ...prevSong, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedSong = await updateSong(id, song);
      setSongs(prevSongs => prevSongs.map(s => (s._id === id ? updatedSong : s)));
      alert('Canción actualizada exitosamente');
      navigate('/songs');
    } catch (error) {
      console.error('Error updating song:', error);
      setError(error.response?.data?.message || 'Error updating song');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h1>Editar Canción</h1>
      <div className="form-group">
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={song.title}
            placeholder="Título"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Artista:
          <input
            type="text"
            name="artist"
            value={song.artist}
            placeholder="Artista"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Género:
          <input
            type="text"
            name="genre"
            value={song.genre}
            placeholder="Género"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Año:
          <input
            type="number"
            name="year"
            value={song.year}
            placeholder="Año"
            onChange={handleChange}
          />
        </label>
      </div>
      {error && <p className='error-message'>{error}</p>}
      <button className="edit-item" type="submit">Actualizar</button>
    </form>
  );
};

export default Editsong;