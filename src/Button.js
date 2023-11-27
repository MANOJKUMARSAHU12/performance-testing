import React, { useState } from 'react';

function Button() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h2>Interactive Button</h2>
      <p>Click Count: {clickCount}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Button;
