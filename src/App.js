import React, { useState } from 'react';
import './Keyboard.css';

const App = () => {
  const [input, setInput] = useState('');
  const [view, setView] = useState('');
  const [isCapsLock, setIsCapsLock] = useState(false);

  const sendText = () => {
    setView(input);
    setInput('');
  };

  const handleKeyPress = (key) => {
    if (isCapsLock) {
      setInput((prevInput) => prevInput + key.toUpperCase());
    } else {
      setInput((prevInput) => prevInput + key.toLowerCase());
    }
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleSpace = () => {
    setInput((prevInput) => prevInput + ' ');
  };

  const handleEnter = () => {
    setInput((prevInput) => prevInput + '\n');
  };

  const toggleCapsLock = () => {
    setIsCapsLock((prevIsCapsLock) => !prevIsCapsLock);
  };

  const keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  return (
    <div className="keyboard-container">
      <textarea value={input} readOnly />
      <div className="keyboard">
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {row.map((key) => (
              <button
                key={key}
                onClick={() => handleKeyPress(key)}
                className="key-button"
              >
                {isCapsLock ? key.toUpperCase() : key.toLowerCase()}
              </button>
            ))}
          </div>
        ))}
        <div className="keyboard-row">
          <button className="key-button keyBig" onClick={handleBackspace}>Backspace</button>
          <button className="key-button keyBig" onClick={toggleCapsLock}>{isCapsLock ? 'Caps Lock On' : 'Caps Lock Off'}</button>
          <button className="key-button keyBig" onClick={handleSpace}>Space</button>
          <button className="key-button keyBig" onClick={handleEnter}>Enter</button>
          <button className="key-button keyBig" onClick={sendText}>Submit</button>
        </div>
      </div>
      <h1>{view}</h1>
    </div>
  );
};

export default App;
