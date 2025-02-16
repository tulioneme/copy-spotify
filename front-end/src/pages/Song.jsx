import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const { name, image, artist, audio, duration } = songsArray.filter(
    (currSong) => currSong._id === id
  )[0];

  const artistItem = artistArray.filter(
    (currArtist) => currArtist.name === artist
  )[0];

  const artistSongs = songsArray.filter(
    (currValue) => currValue.artist === artistItem.name
  );
  const handleSongIndex = Math.floor(Math.random() * (artistSongs.length - 1));
  const handleSongId = artistSongs[handleSongIndex]._id;
  const handleSongIndex2 = Math.floor(Math.random() * (artistSongs.length - 1));
  const handleSongId2 = artistSongs[handleSongIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da Musica ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistItem.id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistItem.image}
            alt={`Imagem Artista ${artist}`}
          />
        </Link>
        <Player
          duration={duration}
          handleSongId={handleSongId}
          handleSongId2={handleSongId2}
          audio={audio}
        />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
