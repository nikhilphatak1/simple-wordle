import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [label, setLabel] = React.useState('');
  const [guesses, setGuesses] = React.useState(range(0, NUM_OF_GUESSES_ALLOWED).map(() => ''));
  const [guessCount, setGuessCount] = React.useState(0);
  const [checkedGuesses, setCheckedGuesses] = React.useState([]);

  const addGuess = guess => {
    if (guessCount >= NUM_OF_GUESSES_ALLOWED) {
      // alert('You lost!');
      return;
    }

    const checkedGuess = checkGuess(guess, answer);
    setCheckedGuesses([...checkedGuesses, checkedGuess]);

    const nextGuesses = [...guesses];
    nextGuesses[guessCount] = guess;
    setGuesses(nextGuesses);
    setGuessCount(guessCount + 1);
  };

  return (
    <>
      <GuessResults guesses={guesses} checkedGuesses={checkedGuesses}/>
      <GuessInput
        label={label}
        setLabel={setLabel}
        addGuess={addGuess}
      />
    </>

  );
}

export default Game;
