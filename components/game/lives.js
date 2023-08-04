import React from "react";

export default function Lives({ livesLeft }) {
  return <>
    <div className="hangman-container">
    <div className="pole"></div>
    <div className={`hangman hangman-${6 - livesLeft}`}>
      <div className="hangman__element"></div>
      <div className="hangman__element"></div>
      <div className="hangman__element"></div>
      <div className="hangman__element"></div>
      <div className="hangman__element"></div>
      <div className="hangman__element"></div>
    </div>
    <div>Lives: {livesLeft}</div>
    </div>
  </>
  
}
