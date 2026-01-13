"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";

import * as Accordion from "@radix-ui/react-accordion";
import { PlusIcon } from "@radix-ui/react-icons";
import HeroBanner from "@/components/hero-banner";
import Link from "next/link";
import { competitionData } from "@/utils/compeition-data";
import { fontSize } from "@/utils/textStyles";

function Thing(props: { val: number, label: string }) {
  return (
    <div className="items-center">
      <h1 className={`${fontSize.x4l3} font-semibold`}>{props.val}+</h1>
      <p className={fontSize.xl3}>{props.label}</p>
    </div>
  );
}

export default function About() {
  const [members, setMembers] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [years, setYears] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const counter = (
    setter: (n: number) => void,
    max: number,
    duration: number
  ) => {
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
      <HeroBanner src="about.jpg" title="About us" />
      <div className="mx-auto my-10 px-10 max-w-6xl gap-4 flex flex-col">
        <h1 className={`${fontSize.x3l3} font-medium`}>
          Our team and FIRST
        </h1>
        <p className={fontSize.lg3}>
          Our team is made up of a diverse group of students with distinct talents and
          abilities while being guided by our mentors, striving to build competitive robots
          in order to inspire and shape our youth.
        </p>
        <div className={`flex flex-col gap-3 sm:flex-row sm:gap-2 text-center ${fontSize.lg3}`}>
          <Link
            href="https://www.firstinspires.org/programs/frc/"
            target="_blank"
            className="border-nav text-nav rounded-lg border-2 p-2 hover:bg-gray-200 max-sm:w-full"
          >
            Learn more about FIRST
          </Link>

          <Link
            href="https://frc-events.firstinspires.org/team/4308"
            target="_blank"
            className="border-nav text-nav rounded-lg border-2 p-2 hover:bg-gray-200 max-sm:w-full"
          >
            Learn more about team 4308
          </Link>
        </div>
      </div>
      <div
        ref={containerRef}
        className="mt-5 mb-5 content-center bg-gray-200 py-10 text-center"
      >
        <h1 className={`mb-4 ${fontSize.x3l3}`}>
          Our team in numbers
        </h1>

        <div className="flex justify-evenly mx-5">
          <Thing val={members} label="Members" />
          <Thing val={alumni} label="Alumni" />
          <Thing val={years} label="Years" />
        </div>
      </div>

      <h1 className={`mt-10 text-center font-medium ${fontSize.x3l3}`}>
        Over the years
      </h1>
      <div className="my-10 px-5 max-w-6xl mx-auto">
        <Accordion.Root
          type="single"
          collapsible
          className="w-full"
        >
          {competitionData.map((yearData, index) => (
            <Accordion.Item key={yearData.year} value={yearData.year}>
              <Accordion.Header>
                <Accordion.Trigger
                  className={`${fontSize.lg3} relative flex w-full items-center border-x border-t border-gray-400 bg-gray-200 px-3 py-2 font-medium hover:bg-gray-300 [&[data-state=open]>svg]:rotate-45 ${index === 0
                    ? "rounded-t-md"
                    : index === competitionData.length - 1
                      ? "rounded-b-md border-b"
                      : ""
                    }`}
                >
                  <PlusIcon className="mr-2 size-6 transition-transform duration-200" />
                  {yearData.year}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="AccordionContent overflow-hidden border-x border-t border-gray-400 bg-[#e7e9ee] text-gray-700">
                {yearData.results.map((result, id) => (
                  <div key={id} className={`my-3 px-4 ${fontSize.md3}`}>
                    <p className="pl-2">{result.event}</p>
                    <ul className="list-inside list-disc pl-8">
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
      </div>
    </>
  );
}
