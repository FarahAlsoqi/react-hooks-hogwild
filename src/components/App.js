import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import HogDetails from "./HogDetails";
import HogForm from "./HogForm"; 
import hogs from "../porkers_data";

function App() {
  const [selectedHog, setSelectedHog] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]); 

  const handleTileClick = (hog) => {
    setSelectedHog(hog);
  };

  const handleHideHog = (hog) => {
    setHiddenHogs((prevHiddenHogs) => [...prevHiddenHogs, hog]);
  };

  const handleAddHog = (hogData) => {
    // Add the new hog to the hogs array
    hogs.push(hogData);
    // You might need to perform additional logic here to properly update the hogs state
  };

  const visibleHogs = hogs.filter((hog) => !hiddenHogs.includes(hog));

  return (
    <div className="App">
      <Nav />
      <HogForm onAdd={handleAddHog} />
      <div className="hogTiles">
        {visibleHogs.map((hog, index) => (
          <HogTile key={index} hog={hog} onClick={handleTileClick} onHide={handleHideHog} />
        ))}
      </div>
      {selectedHog && <HogDetails hog={selectedHog} />}
    </div>
  );
}

export default App;
