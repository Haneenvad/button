import React, { useState } from 'react';


import './App.css'; // Import the CSS file

const App = () => {
  // State to store background color
  const [bgColor, setBgColor] = useState('');

  // Function to handle button clicks and change background color
  const handleButtonClick = (color) => {
    setBgColor(color);
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <button onClick={() => handleButtonClick('red')}>Red</button>
      <button onClick={() => handleButtonClick('green')}>Green</button>
      <button onClick={() => handleButtonClick('blue')}>Blue</button>
    </div>
  );
};

export default App;
