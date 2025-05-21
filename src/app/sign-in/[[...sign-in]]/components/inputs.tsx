"use client";
import { useState } from "react";
interface InputProps {
  type: string;
  initialValue: string;
  placeholder?: string;
  name: string;
}

export function Input({ type, placeholder, initialValue, name }: InputProps) {
  const [value, setValue] = useState(initialValue);
  return (
    <input
      type={type}
      name={name}
      className="border-2 border-gray-300 rounded-r-default px-2 py-3 my-2"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
