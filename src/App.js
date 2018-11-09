import React, { Component } from 'react';
import './App.css';
import NewGame from './screens/NewGame';
import InGame from './screens/InGame';
import EndGame from './screens/EndGame';
import Error from './screens/Error'

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
    let screen;
    if(this.state.screen === "NewGame") {
      screen = <NewGame onFinishScreen={this.handlerScreens} />
    } else if (this.state.screen === "InGame") {
      screen = <InGame onFinishScreen={this.handlerData} />
    } else if ( this.state.screen === "EndGame" ) {
      screen = <EndGame onFinishScreen={this.handlerScreens} game={this.state.data} />
    } else {
      screen = <Error />
    }

    return (
      <div className="App">
        { screen }
      </div>
    );
  }
}

export default App;
