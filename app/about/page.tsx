'use client'

import React from "react";
import { useState, useEffect, useRef } from "react";

import * as Accordion from "@radix-ui/react-accordion";
import { PlusIcon } from "@radix-ui/react-icons"
import HeroBanner from "@/components/hero-banner";
import Link from "next/link";
import { competitionData } from "@/utils/compeition-data";

export default function About() {
  const [members, setMembers] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [years, setYears] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const counter = (setter: (n: number) => void, max: number, duration: number) => {
    let start = 0;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = max / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= max) {
        clearInterval(timer);
        setter(max);
      } else {
        setter(Math.floor(start));
      }
    }, stepTime);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          counter(setMembers, 80, 1500);
          counter(setAlumni, 500, 1500);
          counter(setYears, 12, 1500);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <HeroBanner
        src="big-image.jpg"
        title="About us"
      />
      <div className="max-w-7xl mx-auto max-sm:mx-7 my-10 pl-4">
        <h1 className="text-5xl mb-2 font-extrabold">Our team and FIRST</h1>
        <p className="text-left text-2xl pl-1">Our team is an amalgamation of students with distinct talents and abilities while being guided by our mentors from diverse fields and expertise, striving to build competitive robots in order to inspire and shape our youth.</p>
        <div className="mt-3">
          <Link
            href={"https://www.firstinspires.org/programs/frc/"}
            target="_blank"
            className="border-2 border-nav text-nav p-2 rounded-lg hover:bg-gray-200 mr-2"
          >Learn more about FIRST</Link>
          <Link
            href={"https://frc-events.firstinspires.org/team/4308"}
            target="_blank"
            className="border-2 border-nav text-nav p-2 rounded-lg hover:bg-gray-200"
          >Learn more about team 4308</Link>
        </div>
      </div>
      <div className="content-center pt-10 mt-5 mb-5 pb-15 bg-gray-200" ref={containerRef}>
        <h1 className="text-5xl text-center mt-5 mb-7.5">Our team in numbers</h1>
        <div className="flex justify-evenly bg-">
          <div className="flex flex-col items-center transition-all duration-500">
            <h1 className="text-6xl font-semibold">{members}+</h1>
            <p className="text-3xl">Members</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-semibold">{alumni}+</h1>
            <p className="text-3xl">Alumni</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-semibold">{years}+</h1>
            <p className="text-3xl">Years</p>
          </div>
        </div>
      </div>

      <h1 className="text-center text-6xl mt-10 font-medium">Over the years</h1>
      <Accordion.Root type="single" collapsible className="my-10 w-full max-w-[62.5%] mx-auto ">
        {competitionData.map((yearData, index) => (
          <Accordion.Item
            key={yearData.year}
            value={yearData.year}
            className=""
          >
            <Accordion.Header>
              <Accordion.Trigger className={`w-full relative flex items-center text-left bg-gray-200 border-x-1 border-t-1 border-gray-400 hover:bg-gray-300 px-3 py-2 text-2xl font-semibold [&[data-state=open]>svg]:rotate-45 ${index == 0 ? "rounded-t-md" : index == competitionData.length - 1 ? "rounded-b-md border-b-1" : ""}`}>
                <PlusIcon className="mr-2 size-6 transition-transform duration-200" />
                {yearData.year}
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="overflow-hidden AccordionContent border-x-1 border-t-1 border-gray-400 text-gray-700 bg-[#e7e9ee]">
              {yearData.results.map((result, id) => (
                <div key={id} className="px-3 my-2">
                  <p className="pl-2 list-disc list-inside text-xl">{result.event}</p>
                  <ul className="pl-8 list-disc list-inside">
                    {result.subpoints?.map((subpoint, l) => (
                      <li key={l}>{subpoint}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
}
