//aca se hacen todos los llamados a la api que tengan que ver con SONGS
import api from './axiosConfig';

const getSongs = async () => {
    const response = await api.get('/songs');
    return response.data;
}

const getSongById = async (id) => {
    const response = await api.get(`/songs/${id}`);
    return response.data;
}

const createSong = async (song) => {
    const response = await api.post('/songs', song);
    return response.data;
}

const updateSong = async (id, song) => {
    const response = await api.put(`/songs/${id}`, song);
    return response.data;
}

const deleteSong = async (id) => {
    const response = await api.delete(`/songs/${id}`);
    return response.data;
}

export { getSongs, getSongById, createSong, updateSong, deleteSong };