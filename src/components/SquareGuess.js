import React from 'react';
import './SquareGuest.css';

const SquareGuess = (props) => {
  return(
    <div className="squareGuest" onClick={props.onClick}>
      <img src={props.image} alt={props.name} className="img" />
    </div>
  );
}

export default SquareGuess;