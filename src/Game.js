import React, { Component } from 'react';
import Feedback from './Feedback';
import GuessForm from './GuessForm';
import Counter from './Counter';
import PastGuesses from './PastGuesses';
import './Game.css';


class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      correctNumber: Math.floor(Math.random()*101),
      guesses: [],
      feedback: 'Make your Guess!'
    };
  }

  submitGuess = guess => {
    const diff = Math.abs(guess - this.state.correctNumber);
    let feedback;
    if(diff === 0) feedback = 'You Won. Click new game to play again'
    else if(diff < 10) feedback = 'Hot'
    else if(diff < 30) feedback = 'Warm'
    else feedback = 'Cold';

    this.setState(prevState => {
      return {
        feedback,
        guesses: prevState.guesses.concat(guess)
      }
    });
  }

  render(){

    let { guesses, feedback } = this.state;
    const counter = guesses.length;

    return (
      <div className='container'>
        <main>
          <Feedback text={ feedback }/>
          <GuessForm submitGuess={this.submitGuess}/>
          <Counter counter={ counter }/>
          <PastGuesses guesses={ guesses }/>
        </main>
      </div>
    );
  }
}

export default Game;
