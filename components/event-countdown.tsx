"use client"

import { useEffect, useState } from "react";

function Box({ num, label, notAddS, addLeadingZero }: { num: number, label: string, notAddS?: boolean, addLeadingZero?: boolean }) {
  return (
    <div
      className="bg-gray-300 rounded-lg text-center flex flex-col py-3 w-30 justify-center"
    >
      <h2 className="text-4xl font-medium">{(addLeadingZero && num < 10) ? "0" : ""}{num}</h2>
      <h3 className="text-xl font-medium">{label}{(!notAddS && num != 1) ? "s" : ""}</h3>
    </div>
  );
}

export default function EventCountdown() {
  const eventTime = new Date("09:00 November 2, 2025 EST");
  const [isClient, setIsClient] = useState(false);
  const [timeDiff, setTimeDiff] = useState(Math.floor((+eventTime - +new Date()) / 1000));

  useEffect(() => {
    setIsClient(true)
    setInterval(() => {
      setTimeDiff(Math.floor((+eventTime - +new Date()) / 1000))
    }, 1000)
  }, [eventTime])

  return (
    <>
      <h2 className="text-center mt-12 text-xl">Countdown to next event:</h2>
      <h1 className="text-center text-5xl">Overtime Sunday</h1>
      {
        isClient && <div className="justify-center mt-4 flex flex-row gap-8">
          <Box num={Math.floor(timeDiff / 60 / 60 / 24)} label="Day" />
          <Box num={Math.floor(timeDiff / 60 / 60) % 24} label="Hour" />
          <Box num={Math.floor(timeDiff / 60) % 60} label="Minute" addLeadingZero={true} />
          <Box num={Math.floor(timeDiff) % 60} label="Seconds" notAddS={true} addLeadingZero={true} />
        </div>
      }
    </>
  );
}
