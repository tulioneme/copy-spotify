import axios from "axios";
import "dotenv/config";

const { NODE_ENV } = process.env;

const URL = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";

const respSongs = await axios.get(`${URL}/songs`);
const respArtists = await axios.get(`${URL}/artists`);

export const artistArray = respArtists.data;
export const songsArray = respSongs.data;
