import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AgregarCancion = () => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    year: '',
    genre: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/musica/song', formData);
      console.log('Canción agregada:', response.data);
      setFormData({
        title: '',
        artist: '',
        year: '',
        genre: ''
      });
      alert('Canción agregada exitosamente');
      navigate('/listaCanciones');
    } catch (error) {
      console.error('Error al agregar canción:', error);
      alert('Error al agregar canción');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Agregar Canción</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="artist" className="form-label">Artista</label>
          <input
            type="text"
            className="form-control"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">Año</label>
          <input
            type="number"
            className="form-control"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Género</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Canción</button>
      </form>
    </div>
  );
};

export default AgregarCancion;