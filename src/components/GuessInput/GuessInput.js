import React from 'react';

function GuessInput({ label, setLabel, addGuess }) {
  return (
    <form
      className='guess-input-wrapper'
      onSubmit={event => {
        event.preventDefault();
        addGuess(label);
        setLabel('');
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type="text"
        value={label}
        required
        pattern="[a-zA-Z]{5}"
        onChange={event => {
          setLabel(event.target.value.toUpperCase());
        }}/>
    </form>
  );
}

export default GuessInput;
