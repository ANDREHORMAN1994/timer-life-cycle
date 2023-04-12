import React, { Component } from 'react'

class Timer extends Component {
  state = {
    timer: 10,
  }

  componentDidMount() {
    console.log('DID MOUNT - TIMER');
    this.updateTimer();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    // console.log('SHOULD UPDATE - TIMER');

    // if (nextState.timer < 0) {
    //   clearInterval(this.id);
    //   return false;
    // }
    return true;
  }

  componentDidUpdate() {
    console.log('DID UPDATE - TIMER');
    const { timer } = this.state;

    if (timer === 0) {
      this.setState({
        timer: 10,
      })
    }
  }

  updateTimer = () => {
    // criando uma chave id dentro do this
    this.id = setInterval(() => {
      this.setState(({ timer }) => ({
        timer: timer - 1,
      }))
    }, 1000);
  }

  componentWillUnmount() {
    console.log('UNMOUNT - TIMER');
  }

  render() {
    // console.log('RENDER - TIMER');
    const { timer } = this.state;
    return (
      <h1>Timer: {timer}</h1>
    )
  }
}

export default Timer;
