"use client";
import { useState } from "react";
interface InputProps {
  type: string;
  initialValue: string;
  placeholder?: string;
}

export function Input({ type, placeholder, initialValue }: InputProps) {
  const [value, setValue] = useState(initialValue);
  return (
    <input
      type={type}
      className="border-2 border-gray-300 rounded-r-default px-2 py-3 my-2"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
