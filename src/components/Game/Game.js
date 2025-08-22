import React from "react";

import { sample } from "../../utils";
import { WORDS, LETTERS } from "../../data";
import GuessInput from "../guessInput";
import GuessResults from "../guessResults";
import Keyboard from "../keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isWinner, setIsWinner] = React.useState(false);
  const [letters, setLetters] = React.useState(LETTERS);
  const [guess, setGuess] = React.useState("");

  function gameOver() {
    return isWinner || (!isWinner && guesses.length === NUM_OF_GUESSES_ALLOWED);
  }

  return (
    <>
      <Banner
        gameOver={gameOver()}
        isWinner={isWinner}
        numOfGuesses={guesses.length}
        answer={answer}
      />
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        setIsWinner={setIsWinner}
        answer={answer}
        guesses={guesses}
        setGuesses={setGuesses}
        gameOver={gameOver()}
        guess={guess}
        setGuess={setGuess}
        setLetters={setLetters}
        letters={letters}
      />
      <Keyboard letters={letters} guess={guess} setGuess={setGuess} />
    </>
  );
}

export default Game;
