import React from "react";

function banner({ gameOver, isWinner, numOfGuesses, answer }) {
  return gameOver ? (
    isWinner ? (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
      </div>
    ) : (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    )
  ) : (
    <></>
  );
}

export default banner;
