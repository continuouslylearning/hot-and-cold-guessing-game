import React, { Component } from 'react';

function Feedback(props){

  const feedbackText = props.text;
  
  return (
    <p>{feedbackText}</p>
  ); 

}

export default Feedback;