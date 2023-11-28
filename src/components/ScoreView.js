import React from "react";
import "./ScoreView.css";

const ScoreView = ({ handleResetClick, wine, vodka, whiskey, beer }) => {
  return (
    <div>
      <p>You scored {wine} {vodka} {whiskey} {beer} out of 5</p>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default ScoreView;
