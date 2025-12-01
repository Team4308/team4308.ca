"use client";

import { useEffect, useState } from "react";

const ANIM_MS = 800;
const gradient = "bg-linear-to-b from-white to-gray-400 text-transparent bg-clip-text";

function Box({
  num,
  label,
  noLeadingZero,
}: {
  num: number;
  label: string;
  noLeadingZero?: boolean;
}) {
  const digits = ((!noLeadingZero && num < 10 ? "0" : "") + num);
  const [oldDigits, setOldDigits] = useState<string>(digits);

  useEffect(() => {
    if (oldDigits === digits) return;
    setTimeout(() => {
      setOldDigits(digits)
    }, ANIM_MS);
  }, [digits])

  return (
    <div
      className="bg-nav-dropdown flex w-50 flex-col overflow-hidden rounded-lg px-5 py-3"
    >
      <h3 className={`${gradient} text-xl font-medium`}>
        {label}
        {num !== 1 ? "s" : ""}
      </h3>

      <div className="flex flex-row justify-center select-none">
        {digits.split("").map((digit, i) => {
          const oldDigit = oldDigits[i];
          return (
            <div key={i} className="relative h-10 w-5.5 text-4xl font-medium">
              <div className={`${gradient} absolute w-full`}>
                {digit}
              </div>
              <div className={`w-full bg-nav-dropdown ${digit !== oldDigit ? "fall-anim" : "hidden"}`}>
                <div className={`${gradient} w-full`}>
                  {oldDigit}
                </div>
              </div>
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
    <div className="bg-nav mt-12 py-8 text-center">
      <h2 className={`${gradient} text-xl`}>NEXT EVENT COUNTDOWN</h2>
      <h1 className={`${gradient} text-5xl font-medium`}>
        Ontario District – McMaster University
      </h1>

      {isClient && (
        <div className="mt-6 flex flex-row justify-center gap-4">
          <Box num={days} label="day" noLeadingZero />
          <Box num={hours} label="hour" />
          <Box num={minutes} label="minute" />
          <Box num={seconds} label="second" />
        </div>
      )}
    </div>
  );
}
