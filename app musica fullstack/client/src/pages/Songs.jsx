import React from "react"
import '../styles/Songs.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteSong } from "../api/songsServices";

const Songs = ({songs,setSongs}) => {
    const navigate = useNavigate();
    const handleDelete = (id,title) => {
      if (window.confirm(`¿Estás seguro(a) que deseas eliminar la canción "${title}"?`)) {	
        deleteSong(id);
        setSongs(songs.filter(song => song._id !== id));
        console.log("Song deleted");
      }
    };
    return (
        <div>
            <h1>Songs</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(song => (
          <tr key={song._id}>
            <td><Link to={`/songs/${song._id}`}>{song.title} </Link></td>
            <td>{song.artist}</td>
            <td>
              <button  className="edit-item" onClick= {() => navigate(`/songs/edit/${song._id}`)}>Edit</button>
              <button className="delete-item" onClick={() => handleDelete(song._id,song.title)}>Delete</button>
            </td>
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Songs