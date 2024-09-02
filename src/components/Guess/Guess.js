import React from 'react';

import { range } from '../../utils';

function Guess({ guess, checkedGuess }) {
  const iterable = guess === '' ? range(0, 5).map(() => '') : [...guess];

  return (
  <p className="guess">
    {iterable.map((letter, index) => {
      const className = checkedGuess ? `cell ${checkedGuess[index].status}` : 'cell';
      return (
        <span key={index} className={className}>{letter}</span>
      );
    })}
  </p>
  );
}

export default Guess;
