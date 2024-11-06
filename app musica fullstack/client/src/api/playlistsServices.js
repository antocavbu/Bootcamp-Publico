// aca se hacen todos los llamados a la api que tengan que ver con PLAYLISTS
import api from './axiosConfig';

const getPlaylists = async () => {
    const response = await api.get('/playlists');
    return response.data;
};

const getPlaylistById = async (id) => {
    const response = await api.get(`/playlists/${id}`);
    return response.data;
};

const createPlaylist = async (playlist) => {
    const response = await api.post('/playlists', playlist);
    return response.data;
};

const updatePlaylist = async (id, playlistData) => {
    const response = await api.put(`/playlists/${id}`, playlistData);
    return response.data;
};

const deletePlaylist = async (id) => {
    const response = await api.delete(`/playlists/${id}`);
    return response.data;
};

export { getPlaylists, getPlaylistById, createPlaylist, updatePlaylist, deletePlaylist };