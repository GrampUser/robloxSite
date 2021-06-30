import React, { Component, useState } from "react";

const LoginForm = () => {
  const [count, setCount] = useState(0);

  const images = [
    "https://via.placeholder.com/150/0000FF/808080",
    "https://via.placeholder.com/150/FF0000/FFFFFF",
    "https://via.placeholder.com/150/FFFF00/000E00",
    "https://via.placeholder.com/150/0000FF/808080",
    "https://via.placeholder.com/150/FF0F00/FFFFFF",
    "https://via.placeholder.com/150/FFFF00/000F00",
  ];

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Clicked {count} times</button>
      <img src={images[count]} onClick={increment} />
    </div>
  );
};

export default LoginForm;
