import React from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends React.Component {
  state = {
    showTimer: true,
  }

  handleClick = () => {
    this.setState(({ showTimer }) => ({
      showTimer: !showTimer
    }))
  }

  render() {
    const { showTimer } = this.state;
    return (
      <div className="App">
        <h1>CICLO DE VIDA 🌀</h1>

        { showTimer && <Timer /> }
        
        <button onClick={ this.handleClick } >Mostrar/Ocultar Timer</button>
      </div>
    );
  }
}

export default App;
