import React, { Component } from 'react';


class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      correctNumber: Math.floor(Math.random()*101),
      guesses: [],
      feedback: 'Make your Guess!'
    };
  }

  render(){

    return ( 

    );
  }
}

export default Game;
