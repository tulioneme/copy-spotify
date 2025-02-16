import axios from "axios";

const URL = "http://localhost:3000";

const respSongs = await axios.get(`${URL}/songs`);
const respArtists = await axios.get(`${URL}/artists`);

export const artistArray = respArtists.data;
export const songsArray = respSongs.data;
