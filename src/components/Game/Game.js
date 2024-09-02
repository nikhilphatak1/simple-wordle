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
  const [banner, setBanner] = React.useState('');

  const addGuess = guess => {
    if (guessCount >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const checkedGuess = checkGuess(guess, answer);
    setCheckedGuesses([...checkedGuesses, checkedGuess]);

    const nextGuesses = [...guesses];
    nextGuesses[guessCount] = guess;
    setGuesses(nextGuesses);
    setGuessCount(guessCount + 1);

    const winner = checkedGuess.every(guess => guess.status === 'correct');

    if (guessCount === NUM_OF_GUESSES_ALLOWED - 1 && !winner) {
      setLabel('');
      setBanner('lose');
      return;

    }

    if (winner) {
      setLabel('');
      setBanner('win');
      return;
    }
  };

  const maybeBanner = bannerType => {
    switch (bannerType) {
      case 'win':
        return (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {guessCount} guess{guessCount > 1 ? 'es' : ''}</strong>.
            </p>
          </div>
        );
      case 'lose':
        return (
          <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </div>
        );
      default:
        return;
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} checkedGuesses={checkedGuesses}/>
      <GuessInput
        label={label}
        setLabel={setLabel}
        addGuess={addGuess}
        isDisabled={banner !== ''}
      />
      {maybeBanner(banner)}
    </>
  );
}

export default Game;
