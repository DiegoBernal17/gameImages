import React from 'react';
import './InGame.css';
import SectionGuest from '../components/SectionGuest';
import {BienHecho, MalHecho, RandomAnimals} from '../components/Images';

const aleatorios = RandomAnimals().slice();
export default class InGame extends React.Component {

  constructor(props) {
    super(props);
    let current = aleatorios.pop();
    this.state = {
      level: 1,
      checkAnswer: false,
      correct: false,
      score: 0,
      finished: false,
      current,
      answers: []
    }
  }

  handlerCheckAnser = (animal) => {
    let correct = false, score = this.state.score;
    if(this.state.current === animal) {
      correct = true;
      score++;
    }
    let answers = this.state.answers;
    answers.push({ name: this.state.current.name, correct });
    this.setState({
      checkAnswer: true, 
      level: this.state.level+1, 
      correct, score,
      answers: answers
    });

    setTimeout(() => {
      if(this.state.level <= 9) {
        this.setState({checkAnswer: false, current: aleatorios.pop()})
      } else {
        this.props.onFinishScreen({ answers: this.state.answers, score: this.state.score});
      }  
    },2000);
  }

  render() {
    let component;
    if(this.state.checkAnswer) {
      component = (
        <div className="checkAnswer">
          <img 
            src={ this.state.correct ? BienHecho.image : MalHecho.image } 
            alt={ this.state.correct ? "Bien" : "Mal" } />
          <h1>{ this.state.correct ? BienHecho.text : MalHecho.text }</h1>
        </div>
        );
    } else {
      component = (<div>
      <SectionGuest score={this.state.score} current={this.state.current} onClick={this.handlerCheckAnser} /></div>)
    }

    return(
      <div className="containerInGame">
        {component}
      </div>
    );
  }
}