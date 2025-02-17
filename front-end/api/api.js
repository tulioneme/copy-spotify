import axios from "axios";

// const URL = NODE_ENV === "development" ? "https://copy-spotify.onrender.com/api" : "/api";
const URL = "https://copy-spotify.onrender.com/api";

const respSongs = await axios.get(`${URL}/songs`);
const respArtists = await axios.get(`${URL}/artists`);

export const artistArray = respArtists.data;
export const songsArray = respSongs.data;
