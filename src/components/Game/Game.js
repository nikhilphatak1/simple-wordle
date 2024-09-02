import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [label, setLabel] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = guess => {
    setGuesses([...guesses, guess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        label={label}
        setLabel={setLabel}
        addGuess={addGuess}
      />
    </>

  );
}

export default Game;
