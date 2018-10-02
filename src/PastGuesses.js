import React, { Component } from 'react';

function pastGuesses(props){
  const guesses = props.guesses.map((guess, index) => (
      <li key={index}>
        <span> 
          { guess }
        </span>
      </li>
    )
  );
  return (
    <div>
      <ol>
        { guesses }
      </ol>
    </div>
  );
}

export default pastGuesses;