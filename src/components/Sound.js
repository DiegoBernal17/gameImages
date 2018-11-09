import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: <ReactAudioPlayer src={this.props.current.sound} autoPlay />
    }
  }

  handlerReloadSound = () => {
    this.render();
    console.log('click');
    this.setState({ sound: ""});
    setTimeout(() => {
      this.setState({sound: <ReactAudioPlayer src={this.props.current.sound} autoPlay />});
    },1);
  }

  render() {
    return(
      <div className="sound">
        {this.state.sound}
        <div className="btnGreen" onClick={this.handlerReloadSound}>
          <img src={require('../assets/images/icons/sound.png')} alt="Sonido"/> 
          Presiona para repetir el sonido
        </div>
      </div>
    )
  }
}