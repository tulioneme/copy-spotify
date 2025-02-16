import { db } from "./connect.js";
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";

const newArtistArray = artistArray.map((item) => {
  const newObj = { ...item };
  delete newObj.id;
  return newObj;
});

const newSongArray = songsArray.map((item) => {
  const newObj = { ...item };
  delete newObj.id;
  return newObj;
});

await db.collection("songs").insertMany(newSongArray);
await db.collection("artists").insertMany(newArtistArray);
