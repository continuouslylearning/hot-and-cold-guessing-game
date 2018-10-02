import React, { Component } from 'react';

function GuessForm(props){

  const counter = props.counter;

  return (
    <form>
      <input type='text' placeholder='Enter your Guess'/>
      <button type='submit'>Guess #{counter}</button>
    </form>
  );
  
}