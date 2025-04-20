"use client";

import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  console.log({ counter });
  return (
    <>
      <button
        className="px-3 bg-gray-2 border-gray-4 border-2 border-r-0"
        onClick={() => setCounter(counter + 1)}
      >
        <p className="text-lg px-2 text-gray-3 cursor-pointer">+</p>
      </button>
      <p className="px-3 border-gray-4 border-2 bg-gray-2">
        <p className="text-lg px-2 text-gray-3">{counter}</p>
      </p>
      <button
        className="px-3 border-gray-4 border-2 border-l-0 bg-gray-2"
        onClick={() => {
          if (counter > 0) setCounter(counter - 1);
        }}
      >
        <p className="text-lg px-2 text-gray-3 cursor-pointer">-</p>
      </button>
    </>
  );
}
