import React, { useState } from 'react';
import './AdminStatic.css';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <button className={`toggle-button ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};

export default ToggleButton;