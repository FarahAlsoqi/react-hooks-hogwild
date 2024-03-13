import React from "react";

const HogTile = ({ hog, onClick, onHide }) => {
  return (
    <div className="hogTile">
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} />
      <button onClick={() => onHide(hog)}>Hide</button>
    </div>
  );
};

export default HogTile;
