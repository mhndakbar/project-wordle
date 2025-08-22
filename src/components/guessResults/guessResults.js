import React from "react";
import { range } from "../../utils";
import Guess from "../guess/guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function guessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} guess={guesses[num]} answer={answer} />;
      })}
    </div>
  );
}

export default guessResults;
