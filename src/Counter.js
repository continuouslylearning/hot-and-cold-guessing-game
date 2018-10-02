import React, { Component } from 'react';

function Counter(props){

  const counter = props.counter;

  return (
    <p> 
      Guess #{counter}
    </p>
  );
}

export default Counter;