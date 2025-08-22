import React from "react";

function key({ letter, status, onClick }) {
  return (
    <button className={`key ${status}`} onClick={() => onClick(letter)}>
      {letter}
    </button>
  );
}

export default key;
