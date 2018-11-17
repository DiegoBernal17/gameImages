import React from 'react';
import './EndGame.css';

export default class EndGame extends React.Component {

  componentDidMount () {
    let url = 'http://localhost:8080/api-gameImages/historico/create.php';

    let answers = [];
    this.props.game.answers.map(animal => 
      answers.push(animal.correct ? 1 : 0, animal.name, 1)
    );

    let answers_json = { 
      P9_intentos : answers.pop(),
      P9_audio : answers.pop(),
      P9 : answers.pop(),
      P8_intentos : answers.pop(),
      P8_audio : answers.pop(),
      P8 : answers.pop(),
      P7_intentos : answers.pop(),
      P7_audio : answers.pop(),
      P7 : answers.pop(),
      P6_intentos : answers.pop(),
      P6_audio : answers.pop(),
      P6 : answers.pop(),
      P5_intentos : answers.pop(),
      P5_audio : answers.pop(),
      P5 : answers.pop(),
      P4_intentos : answers.pop(),
      P4_audio : answers.pop(),
      P4 : answers.pop(),
      P3_intentos : answers.pop(),
      P3_audio : answers.pop(),
      P3 : answers.pop(),
      P2_intentos : answers.pop(),
      P2_audio : answers.pop(),
      P2 : answers.pop(),
      P1_intentos : answers.pop(),
      P1_audio : answers.pop(),
      P1 : answers.pop()
    };
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify( answers_json )
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  handlerReload = () => {
    window.location.reload();
  }

  render() {
    let msg;
    let score = this.props.game.score;
    console.log(score);
    if(score < 2) {
      msg = "Muy mal ¿Qué pasó?"
    }else if (score >= 2 && score < 6) {
      msg = "¡Debes de mejorar!";
    } else if (score >= 6 && score < 9) {
      msg = "Bien pero puedes mejorar"
    } else if ( score === 9) {
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