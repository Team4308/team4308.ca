"use client"

import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useRef, useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [clickedState, setClicked] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout>(null);
  function clicked() {
    setClicked(true);
    if (timeoutId.current) clearTimeout(timeoutId.current)
    timeoutId.current = setTimeout(() => {
      setClicked(false);
    }, 1000);
    navigator.clipboard.writeText(text);
  }
  return (
    <div
      className={`text-background absolute top-2 right-2 p-1.5 rounded-lg border border-gray-500 transition-colors duration-300 ${clickedState ? "bg-green-400" : "hover:bg-gray-600 bg-gray-700"}`}
      onClick={clicked}
    >
      {
        clickedState ?
          <CheckIcon className="size-5" /> :
          <ClipboardIcon className="size-5" />
      }
    </div>
  );
}
