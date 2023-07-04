import React from "react";
import { MinusCircle, PlusCircle } from "phosphor-react";
import { useState } from "react";

const Counter = ({ price }) => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex w-[5rem] items-center justify-between">
      <MinusCircle onClick={decrement} />
      <span>{count}</span>
      <PlusCircle onClick={increment} />
    </div>
  );
};

export default Counter;
