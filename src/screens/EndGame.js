import React from 'react';
import './EndGame.css';

export default class EndGame extends React.Component {

  handlerReload = () => {
    window.location.reload();
  }

  render() {
    let msg;
    let score = this.props.score;
    if(score < 2) {
      msg = "Muy mal ¿Qué pasó?"
    }else if(score >= 2 && score < 6) {
      msg = "¡Debes de mejorar!";
    } else if(score >= 6 && score <10) {
      msg = "Bien pero puedes mejorar"
    } else {
      msg = "¡Excelente!"
    }
    return(
      <div className="containerEndGame">
        <div className="finishBox">
          <h2>{msg}</h2>| 
          Correctas: <b>{this.props.game.score}</b> | 
          Incorrectas: <b>{9 - this.props.game.score}</b> |
          <br/>
          <table>
            <thead>
              <tr>
                <th>Número</th>
                <th>Sonido</th>
                <th>Respuesta</th>
              </tr>
            </thead>
            <tbody>
              { this.props.game.answers.map((animal, i) => (
              <tr key={i} >
                <td>{i+1}</td>
                <td>{animal.name}</td>
                <td>{animal.correct ? "Correcta" : "Incorrecta"}</td>
              </tr>))
              }
            </tbody>
          </table>
          <div className="btnGreen" onClick={this.handlerReload}>
            <img src={require('../assets/images/icons/reload.png')} alt="Jugar"/>
            Volver a jugar 
          </div>
        </div>
      </div>
    );
  }
}