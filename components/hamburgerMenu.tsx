"use client";

import { useState } from "react";
import Link from "next/link";

const MyComponent = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <div className="flex lg:hidden">
      <svg
        viewBox="0 0 100 80"
        width="24"
        height="24"
        fill="#D6D6D6"
        className="m-1 cursor-pointer self-center"
        onClick={toggleOpen}
      >
        <rect width="100" height="10"></rect>
        <rect y="30" width="100" height="10"></rect>
        <rect y="60" width="100" height="10"></rect>
      </svg>
      <div
        className={`fixed right-0 top-0 transform ${open ? "translate-x-0" : "translate-x-full"} flex h-screen w-screen flex-col bg-neutral-900 p-12 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-row items-center justify-between">
          <p className="text-2xl font-semibold">Navigation</p>
          <svg
            viewBox="0 0 40 40"
            width="40"
            height="40"
            onClick={toggleOpen}
            className="cursor-pointer"
          >
            <path
              d="M 10,10 L 30,30 M 30,10 L 10,30"
              stroke="#FFFFFF"
              strokeWidth="4"
            />
          </svg>
        </div>
        <hr className="mb-6 mt-1" />
        <ol className="space-y-4">
          <li>
            <Link href="/" className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/join" className="text-lg">
              Students
            </Link>
          </li>
          <li>
            <Link href="/sponsor" className="text-lg">
              Sponsors
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-lg">
              Blog
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default MyComponent;
