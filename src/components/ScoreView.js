import React from "react";
import "./ScoreView.css";

const ScoreView = ({ handleResetClick, wine, vodka, whiskey, beer }) => {

  let answer = Math.max(wine, vodka, whiskey, beer);

  return (
    <div>

      {answer === wine ?
        (<div>
          <p>Vin</p>
          <img src="wine.jpg" alt='' width="300px" />
          <p>Esti o persoana ce prefera o seara relaxanta, culturala si apreciaza subtilitatile! Prin urmare esti un degustator innascut al vinurilor.</p>
        </div>) :
        (answer === vodka ?
          <div>
            <p>Vodka</p>
            <img src="vodka.jpg" alt='' width="300px" />
            <p>Esti o persoana ce prefera activitatile sociale si deschiderea catre comunicare! Prin urmare intotdeauna vodka va fi prima ta alegere.</p>
          </div> : (answer === whiskey ?
            <div>
              <p>Whiskey</p>
              <img src="whiskey.jpg" alt='' width="300px" />
              <p>Esti o persoana cu gusturi rafinate si placere pentru detalii! Prin urmare esti un adept al whiskey-ului.</p>
            </div> : (answer === beer ?
              <div>
                <p>Bere</p>
                <img src="beer.jpg" alt='' width="300px" />
                <p>Esti o persoana sociabila, ce prefera relaxarea in natura! Prin urmare nimic nu va inlocui pentru tine gustul unei beri reci.</p>
              </div> : null)))
      }

      <button onClick={handleResetClick}>Incearca iar</button>

    </div >
  );
};

export default ScoreView;
