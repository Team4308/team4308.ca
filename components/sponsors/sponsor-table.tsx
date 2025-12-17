'use client'

import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";
export default function SponsorTiers() {
  const tiers = ["Bronze", "Silver", "Gold", "Platinum"];
  const colours = ["text-[#A97142]", "text-[#B5B5B5]", "text-[#EFBF04]", "text-[#D9D9D9]"];
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
    [true, true, true, true], // shirt & website
    [true, true, true, true], // banner
    [true, true, true, true], // social media
    [false, true, true, true], // robot
    [false, true, true, true], // competitions
    [false, false, true, true], // live robot
    [false, false, true, true], // updates
    [false, false, false, true], // changing colors
  ];

  return (
    <div className="my-10 border-nav border-1 rounded-2xl overflow-x-auto w-[75%] mx-auto flex">
      <table className="w-full border-seperate border-spacing-0 text-center">
        <thead>
          <tr className="">
            <th className="bg-nav w-2/7 arounded-tl-2xl">
            </th>
            {tiers.map((tier, i) => (
              <th key={tier} className={`bg-nav text-white p-4 w-1/6
               ${i === tiers.length - 1 ? "arounded-tr-2xl" : ""}`}
              >
                <div className="flex flex-col items-center">
                  <span className={`font-bold text-2xl uppercase ${colours[i]}`}>{tier}</span>
                  <span className="text-xl">{prices[i]}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {benefits.map((benefit, rowIdx) => (
            <tr key={benefit} className="border-t border-nav divide-x">
              <td className="pl-5 py-4 text-xl text-left font-medium">{benefit}</td>
              {benefitsByTier[rowIdx].map((has, colIdx) => (
                <td key={colIdx} className="p-3 text-center">
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
  );
}
