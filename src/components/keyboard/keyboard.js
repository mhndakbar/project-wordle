import React from "react";
import "./keyboard.css";
import Key from "../key/key";

function keyboard({ letters, guess, setGuess }) {
  // Define proper QWERTY layout
  const keyboardLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  function handleKeyClick(key) {
    if (guess.length < 5) {
      const newGuess = guess + key;
      setGuess(newGuess);
    }
  }

  return (
    <div className="keyboard">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter) => {
            return (
              <Key
                key={letter}
                letter={letter}
                status={letters[letter] || "unused"}
                onClick={handleKeyClick}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default keyboard;
