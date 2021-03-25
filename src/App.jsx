import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const onClickPlus = () => {
    return setCount(count + 1);
  };

  const onClickMinus = () => {
    return count === 0 || setCount(count - 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </>
  );
};
