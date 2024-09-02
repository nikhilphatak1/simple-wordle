import React from 'react';

import Guess from '../Guess';

function GuessResults({ guesses, checkedGuesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} checkedGuess={checkedGuesses[index]}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
