"use client";

import { useEffect, useState } from "react";

const ANIM_MS = 800;
const gradient = "bg-linear-to-b from-foreground to-gray-600 text-transparent bg-clip-text";

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
      className="bg-gray-300 rounded-lg text-center flex flex-col py-3 w-50 justify-center overflow-hidden"
    >
      <h3 className={`${gradient} max-sm:text-sm sm:text-md md:text-lg lg:text-xl font-medium`}>
        {label}
        {num !== 1 ? "s" : ""}
      </h3>

      <div className="flex flex-row justify-center select-none">
        {digits.split("").map((digit, i) => {
          const oldDigit = oldDigits[i];
          return (
            <div key={i} className="relative h-10 max-sm:w-3.75 max-sm:text-2xl sm:w-4.5 sm:text-3xl md:w-5.5 md:text-4xl font-medium">
              <div className={`${gradient} absolute w-full`}>
                {digit}
              </div>
              <div className={`w-full bg-gray-300 ${digit !== oldDigit ? "fall-anim" : "hidden"}`}>
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
  const eventTime = new Date("Mar 21 2026 08:00:00 EST");
  const [isClient, setIsClient] = useState(false);
  const [timeDiff, setTimeDiff] = useState(
    Math.floor((+eventTime - +new Date()) / 1000)
  );

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setTimeDiff(Math.floor((eventTime.getTime() - new Date().getTime()) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeDiff / 86400);
  const hours = Math.floor(timeDiff / 3600) % 24;
  const minutes = Math.floor(timeDiff / 60) % 60;
  const seconds = timeDiff % 60;

  return (
    <div className="bg-gray-200 mt-12 py-8 text-center px-5">
      <h2 className={`${gradient} text-xl max-sm:text-lg`}>NEXT EVENT COUNTDOWN</h2>
      <h1 className={`${gradient} font-medium max-sm:text-3xl sm:text-4xl md:text-5xl`}>
        Ontario District – McMaster University
      </h1>

      {isClient && (
        <div className="mt-6 flex flex-row justify-center gap-4 max-sm:gap-2">
          <Box num={days} label="day" noLeadingZero />
          <Box num={hours} label="hour" />
          <Box num={minutes} label="minute" />
          <Box num={seconds} label="second" />
        </div>
      )}
    </div>
  );
}
