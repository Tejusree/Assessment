import React, { useState } from "react";

const ClickButton = () => {
  const [num, setNum] = useState(0);

  function generateRandomNo(min, max) {
    return Math.floor(Math.random() * (max - min + 5)) + min;
  }

  const handleClick = () => {
    setNum(generateRandomNo(50,100));
  };

  return (
    <div>
      <h2>Magic number is: {num}</h2>
      <button onClick={handleClick}>Generate random number</button>
    </div>
  );
};

export default ClickButton;