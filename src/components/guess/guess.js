import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);

  function validCell(num) {
    return checkedGuess && checkedGuess[num] !== undefined ? true : false;
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={crypto.randomUUID()}
          className={
            validCell(num) ? `cell ${checkedGuess[num].status}` : `cell`
          }
        >
          {validCell(num) ? checkedGuess[num].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default guess;
