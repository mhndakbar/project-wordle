import React from "react";
import { checkGuess } from "../../game-helpers";

function guessInput({
  guesses,
  setGuesses,
  gameOver,
  answer,
  setIsWinner,
  setGuess,
  guess,
  setLetters,
  letters,
}) {
  function handleGuess(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function keysStatus() {
    const checkedGuess = checkGuess(guess, answer);
    const newLetters = { ...letters };
    for (const checkedLetter of checkedGuess) {
      newLetters[checkedLetter.letter] = checkedLetter.status;
    }
    setLetters(newLetters);
  }

  function handleGuessSubmit(event) {
    event.preventDefault();
    console.log("Guess submitted:", guess);
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    setGuess("");
    if (guess === answer) {
      setIsWinner(true);
    }
    keysStatus();
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleGuess}
        pattern="[A-Z]{5}"
        maxLength={5}
        title="5 letter word"
        required
        disabled={gameOver}
      />
    </form>
  );
}

export default guessInput;
