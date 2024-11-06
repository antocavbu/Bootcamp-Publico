import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPlaylistById ,deletePlaylist} from '../api/playlistsServices.js';
import '../styles/Songs.css';


const SinglePlaylist = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const playlistData = await getPlaylistById(id);
        console.log('Fetched playlist data:', playlistData); // Debugging
        setPlaylist(playlistData);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };
    fetchPlaylist();
  }, [id]);

  if (!playlist) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = async () => {
    try {
      window.confirm('¿Estas seguro de que desea eliminar la playlist?');
      await deletePlaylist(playlist._id);
      navigate('/playlist');
    } catch (error) {

    }
  };
  return (
    <div className='form-container'>
      <h1>{playlist.name}</h1>
      <div className='form-group '>
        <h2>Songs:</h2>
        {playlist.songs.map(song => (
            <h3>{song.title} - {song.artist}</h3>
        ))}
        <div className='botones-container'>
          <button className="edit-item" onClick= {() => navigate(`/playlist/edit/${playlist._id}`)}>Edit</button>
          <button  className="delete-item" onClick = {handleDelete}>Delete</button>
        </div>
       
      </div>
    </div>
  );
};


export default SinglePlaylist;