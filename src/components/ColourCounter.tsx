import { useState } from "react";
import "../styles/ColourCounter.css";

function ColourCounter() {
  const [redCount, setRedCount] = useState(0);
  const [blueCount, setBlueCount] = useState(0);

  const getBiggerColourText = () => {
    if (redCount > blueCount) {
      return "Red has been pressed more times than blue.";
    } else if (blueCount > redCount) {
      return "Blue has been pressed more times than red.";
    } else {
      return "Red and blue have been pressed equal times.";
    }
  };

  return (
    <>
      <div className="flex-container">
        <div className="colour-container red-container">
          <p>Red was pressed {redCount} times.</p>
          <button type="button" onClick={() => setRedCount(redCount + 1)}>
            Red
          </button>
        </div>
        <div className="colour-container blue-container">
          <p>Blue was pressed {blueCount} times.</p>
          <button type="button" onClick={() => setBlueCount(blueCount + 1)}>
            Blue
          </button>
        </div>
      </div>
      <p>{getBiggerColourText()}</p>
    </>
  );
}

export default ColourCounter;
