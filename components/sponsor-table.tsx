'use client'

import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";
export default function SponsorTiers() {
  const tiers = ["Bronze", "Silver", "Gold", "Platinum"];
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
    <div className="p-6 rounded-2xl overflow-x-auto w-[75%] mx-auto flex">
      <table className="w-full border-seperate border-spacing-0 text-center">
        <thead>
          <tr className = "">
            <th className = "bg-nav w-2/7 arounded-tl-2xl -m-5">
            </th>
            {tiers.map((tier, i) => (
              <th key={tier} className={`bg-nav text-white p-4 w-1/6
               ${i === tiers.length - 1 ? "arounded-tr-2xl" : ""}`}
              >
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl uppercase">{tier}</span>
                  <span className="text-xl">{prices[i]}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {benefits.map((benefit, rowIdx) => (
            <tr key={benefit} className="border-t border-nav divide-x">
              <td className="text-xl text-left font-medium pt-1">{benefit}</td>
              {benefitsByTier[rowIdx].map((has, colIdx) => (
                <td key={colIdx} className="p-3 text-center">
                  {has && (
                    <CheckCircledIcon className = "w-5 h-5 text-green-700 mx-auto"/>
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