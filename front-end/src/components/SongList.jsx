import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  // let numItems = 5;

  let [numItems, setNumItems] = useState(5);
  return (
    <div className="song__list">
      {songsArray
        .filter((currValue, index) => index < numItems)
        .map((currItem, index) => (
          <SongItem {...currItem} key={index} index={index} />
        ))}
      <p
        className="song-list__see-more"
        onClick={() => setNumItems((numItems += 5))}
      >
        Ver Mais
      </p>
    </div>
  );
};

export default SongList;
