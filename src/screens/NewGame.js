import React from 'react';
import './NewGame.css';

const NewGame = (props) => {
  return(
    <div className="containerNewGame">
      <button className="newGameButton" onClick={() => props.onFinishScreen("InGame")}>Nueva partida</button>
    </div>
  );
}

export default NewGame;