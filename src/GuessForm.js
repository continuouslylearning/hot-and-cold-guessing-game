import React, { Component } from 'react';

class GuessForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      guess: ''
    }
  }
  onSubmit = event => {
    event.preventDefault();
    const guess = this.state.guess;
    console.log(guess);
    this.props.submitGuess(parseInt(guess));

  }

  onChange = event => {
    this.setState({
      guess: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' placeholder='Enter your Guess' value={this.state.guess} onChange={this.onChange}/>
        <button type='submit'>Guess</button>
      </form>
    );  
  }
}

export default GuessForm;