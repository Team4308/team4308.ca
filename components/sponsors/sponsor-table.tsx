'use client'

import React, { useEffect, useRef, useState } from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { fontSize } from "@/utils/textStyles";

export default function SponsorTiers() {
  const tiers = ["Bronze", "Silver", "Gold", "Platinum"];
  const colours = [
    "from-[#FFD89F] to-[#CD8E32]",
    "from-[#C0C0C0] to-[#909090]",
    "from-[#F9F295] to-[#D2AC47]",
    "from-[#D9D9D9] to-[#A3A3A3]"
  ];
  const prices = ["$250+", "$1000+", "$2000+", "$3000+"];

  const benefits = [
    "Name & logo on team shirt & website",
    "Name & logo on team banner",
    "Shout-out on social media",
    "Name & logo on competition robot",
    "Shout-out at competitions",
    "Live robot demos",
    "Monthly updates on the team",
    "Anodized robot to company colors"
  ];

  const benefitsByTier = [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [false, true, true, true],
    [false, true, true, true],
    [false, false, true, true],
    [false, false, true, true],
    [false, false, false, true],
  ];

  const scroll = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  function Scroll() {
    const a = scroll.current;
    if (!a) return;

    const maxSizeForShade = a.scrollWidth - a.clientWidth;
    if (maxSizeForShade == 0) {
      setLeft(0)
      setRight(0)
      return;
    }
    const progress = maxSizeForShade > 0 ? a.scrollLeft / maxSizeForShade : 0;

    setLeft(Math.min(progress * 1.2, 1));
    setRight(Math.min((1 - progress) * 1.2, 1));
  }

  useEffect(() => {
    Scroll()
    const resizeObserver = new ResizeObserver(Scroll);
    if (scroll.current) resizeObserver.observe(scroll.current)
    return () => resizeObserver.disconnect();
  }, [])

  return (
    <div className="relative max-sm:w-full mx-auto max-w-7xl px-5">
      <div
        ref={scroll}
        onScroll={Scroll}
        className="my-10 border-nav border-2 rounded-2xl overflow-x-scroll flex hide-scrollbar"
      >
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="bg-nav arounded-tl-2xl min-w-55"></th>
              {tiers.map((tier, i) => (
                <th
                  key={tier}
                  className={`bg-nav text-background p-4 w-[15%] min-w-35 ${i === tiers.length - 1 ? "arounded-tr-2xl" : ""
                    }`}
                >
                  <div className="flex flex-col items-center">
                    <span
                      className={`font-bold ${fontSize.lg3} uppercase bg-gradient-to-r text-transparent bg-clip-text ${colours[i]}`}
                    >
                      {tier}
                    </span>
                    <span className={fontSize.md3}>
                      {prices[i]}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit, rowIdx) => (
              <tr key={benefit} className="border-t-1 border-nav divide-x">
                <td className={`max-sm:px-3 max-sm:py-3 ${fontSize.sm4} px-5 py-4 text-left font-medium border-nav`}>
                  {benefit}
                </td>
                {benefitsByTier[rowIdx].map((has, colIdx) => (
                  <td key={colIdx} className="p-3 text-center border-nav">
                    {has && (
                      <CheckCircledIcon className="size-6 text-green-700 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{ opacity: left }}
        className="pointer-events-none absolute top-0 left-1 h-full w-9 max-sm bg-gradient-to-r from-background to-transparent"
      />

      <div
        style={{ opacity: right }}
        className="pointer-events-none absolute top-0 right-1 h-full w-9 max-sm bg-gradient-to-l from-background to-transparent"
      />
    </div>
  );
}
