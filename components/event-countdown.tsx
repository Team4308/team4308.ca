"use client";

const ANIM_MS = 600; // css ms

import { useEffect, useRef, useState } from "react";

function Box({
  num,
  label,
  notAddS,
  addLeadingZero,
}: {
  num: number;
  label: string;
  notAddS?: boolean;
  addLeadingZero?: boolean;
}) {
  const prev = useRef<string>(""); // last committed value I believe
  const [animating, setAnimating] = useState<boolean[]>([]);
  const [oldDigitsState, setOldDigitsState] = useState<string[]>([]);
  const padded = (addLeadingZero && num < 10 ? "0" : "") + String(num);
  const digits = padded.split("");
  useEffect(() => {
    if (prev.current === "") {
      prev.current = padded;
    }
  }, []);

  useEffect(() => {
    if (prev.current === padded) return;

    const oldDigits = prev.current.split("");
    const maxLen = Math.max(oldDigits.length, digits.length);
    const oldNorm = Array.from({ length: maxLen }).map(
      (_, i) => oldDigits[i] ?? ""
    );
    const newNorm = Array.from({ length: maxLen }).map(
      (_, i) => digits[i] ?? ""
    );

    const changed = newNorm.map((d, i) => d !== oldNorm[i]);

    if (!changed.some(Boolean)) {
      prev.current = padded;
      return;
    }

    // So that old digits can drop
    setOldDigitsState(oldNorm);
    setAnimating(changed);
    const t = setTimeout(() => {
      setAnimating([]);
      setOldDigitsState([]);
      prev.current = padded;
    }, ANIM_MS);

    return () => clearTimeout(t);
  }, [padded]);

  return (
    <div
      className="bg-nav-dropdown flex w-50 flex-col overflow-hidden rounded-lg px-5 py-3 text-center transition-all duration-300 ease-out select-none"
      style={{ boxShadow: "2px 2px 2px #76182cff" }}
    >
      <h3 className="mb-1 text-xl font-medium">
        {label}
        {!notAddS && num !== 1 ? "s" : ""}
      </h3>

      <div className="relative flex flex-row justify-center">
        {digits.map((digit, i) => {
          const isAnimating = animating[i] ?? false;
          const oldDigit = oldDigitsState[i] ?? digit;
          return (
            <div key={i} className="relative h-[44px] w-[22px] overflow-hidden">
              <div className="time-gradient absolute inset-0 flex items-center justify-center text-4xl font-medium">
                {digit}
              </div>
              {isAnimating && (
                <div className="fall-digit time-gradient text-4xl font-medium">
                  {oldDigit}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function EventCountdown() {
  const eventTime = new Date("08:00 March 21, 2026 EST");
  const [isClient, setIsClient] = useState(false);
  const [timeDiff, setTimeDiff] = useState(
    Math.floor((+eventTime - +new Date()) / 1000)
  );

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setTimeDiff(Math.floor((+eventTime - +new Date()) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeDiff / 86400);
  const hours = Math.floor(timeDiff / 3600) % 24;
  const minutes = Math.floor(timeDiff / 60) % 60;
  const seconds = timeDiff % 60;

  return (
    <div
      className="bg-nav mt-12 py-8 text-white"
      style={{ boxShadow: "2px 2px 5px rgba(117, 71, 71, 0.5)" }}
    >
      <h2 className="text-center text-xl">NEXT EVENT COUNTDOWN</h2>
      <h1
        className="text-center text-5xl font-medium"
        style={{ textShadow: "3px 2px 5px rgba(60,60,60,0.5)" }}
      >
        Ontario District – McMaster University
      </h1>

      {isClient && (
        <div className="mt-10 flex flex-row justify-center gap-4">
          <Box num={days} label="day" />
          <Box num={hours} label="hour" addLeadingZero />
          <Box num={minutes} label="minute" addLeadingZero />
          <Box num={seconds} label="second" notAddS addLeadingZero />
        </div>
      )}
    </div>
  );
}
