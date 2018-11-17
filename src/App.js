import React, { Component } from 'react';
import './App.css';
import NewGame from './screens/NewGame';
import InGame from './screens/InGame';
import EndGame from './screens/EndGame';
import Error from './screens/Error'
import ReactAudioPlayer from 'react-audio-player';

class App extends Component {

  constructor() {
    super();
    this.state = {
      screen: "NewGame",
      data: ""
    }
  }

  handlerScreens = (screen) => {
    this.setState({ screen });
  }

  handlerData = (data) => {
    this.setState({screen: "EndGame", data});
  }

  render() {
    let screen, audio;
    if(this.state.screen === "NewGame") {
      screen = <NewGame onFinishScreen={this.handlerScreens} />
      audio = require('./assets/sounds/nuevapartida.mp3');
    } else if (this.state.screen === "InGame") {
      screen = <InGame onFinishScreen={this.handlerData} />
      audio = require('./assets/sounds/preguntas.mp3');
    } else if ( this.state.screen === "EndGame" ) {
      screen = <EndGame onFinishScreen={this.handlerScreens} game={this.state.data} />
      audio = require('./assets/sounds/volver_a_jugar.mp3');
    } else {
      screen = <Error />
    }

    return (
      <div className="App">
        <ReactAudioPlayer src={audio} autoPlay />
        { screen }
      </div>
    );
  }
}

export default App;
