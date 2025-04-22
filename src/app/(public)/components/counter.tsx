"use client";

import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        className="bg-gray-2 border-gray-4 border-1 border-r-0"
        onClick={() => setCounter(counter + 1)}
      >
        <p className="text-lg px-2 text-gray-3 cursor-pointer">+</p>
      </button>
      <span className="px-3 border-gray-4 border-1 bg-gray-2">
        <p className="text-lg px-2 text-gray-3">{counter}</p>
      </span>
      <button
        className="border-gray-4 border-1 border-l-0 bg-gray-2"
        onClick={() => {
          if (counter > 0) setCounter(counter - 1);
        }}
      >
        <p className="text-lg px-2 text-gray-3 cursor-pointer">-</p>
      </button>
    </>
  );
}
