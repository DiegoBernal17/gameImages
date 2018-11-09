import React from 'react';
import SquareGuess from "./SquareGuess";
import {RandomAnimals} from '../components/Images';
import './SectionGuest.css';
import Sound from '../components/Sound';

export default class SectionGuest extends React.Component {
  render() {
    return(
      <div className="sectionGuest">
        <div className="headerInGame">
          <Sound current={this.props.current} />
          <span className="score">Puntuación: {this.props.score}</span>
        </div>
        <div className="bodyInGame">
          {RandomAnimals().map((animal, i) => 
          <SquareGuess image={animal.image} name={animal.name} key={i} onClick={() => this.props.onClick(animal)} />
          )}
        </div>
      </div>
    );
  }
}