'use Client'
import { useState, ReactNode } from "react";

interface Props{
    title: string,
    children: ReactNode,
}

export default function Dropdown({title, children}: Props) {
  const [isOpen, setIsOpen] = useState(false);

return (
    <div className="w-full max-w-200 mx-auto">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex justify-between items-center border-b border-gray-300 py-2"
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <span
          className={`text-2xl transform transition-transform duration-600 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </div>
      <div
        className={`custom-bullets transition-all duration-600 overflow-hidden ${
          isOpen ? "max-h-200 opacity-100 mt-2 " : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
