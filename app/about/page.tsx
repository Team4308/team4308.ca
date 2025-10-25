'use client'

import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef } from "react";

import * as Accordion from "@radix-ui/react-accordion";
import {PlusIcon} from "@radix-ui/react-icons"

interface CompetitionResult {
  event: string;
  subpoints?: string[];
}

interface CompetitionYear {
  year: string;
  results: CompetitionResult[];
}

const competitionData: CompetitionYear[] = [
  {
    year:"2025",
    results: [
      {
        event: "Ontario District - Humber Polytechnic Event - 19th place",
        subpoints: ["Alliance 7 pick 1", "Lost in semifinals(3rd place)"],
      },
      {
        event: "Ontario District - McMaster University - 9th place",
        subpoints: ["Captain of Alliance 6", "Lost in quarterfinals(7-8 place)"],
      },
      {
        event: "FIRST Ontario Provincial Championship - Technology Division - 29th place",
      },
    ]
  },
  {
    year:"2024",
    results: [
      {
        event: "Ontario District - Humber College Event - 12th place",
        subpoints: ["Captain of Alliance 7", "Lost in Quarterfinals(7-8 place)", "Won Excellence in Engineering Award"],
      },
      {
        event: "Ontario District - McMaster University - 19th place",
        subpoints: ["Alliance 7 pick 2", "Lost in Quarterfinals(7-8 place)"],
      },
      {
        event: "FIRST Ontario Provincial Championship - Technology Division - 24th place",
      },
      {
        event: "Ontario District - Overtime Sunday - 23rd",
        subpoints:["Alliance 1 pick 2", "Won the event(champions)"]
      },
    ]
  },
  {
    year:"2023",
    results: [
      {
        event: "Ontario District - Humber College Event - 26th place",
        subpoints: ["Alliance 3 pick 2", "Eliminated in Semifinals(3-4 place)"],
      },
      {
        event: "Ontario District - Windsor Essex Great Lakes Event - 21st place",
        subpoints: ["Alliance 7 pick 2", "Lost in Quarterfinals(7-8 place)", "Won Team Sustainability Award"],
      },
      {
        event: "FIRST Ontario Provincial Championship - Technology Division - 27th place",
      },
      {
        event: "Ontario District - Overtime Sunday - 16th",
        subpoints:["Alliance 2 pick 2", "Eliminated in Finals(2nd place)"]
      },
    ]
  },
   {
    year: "2021",
    results: [
      {
        event: "FIRST Innovation Challenge Semi-Finalist Award",
      },
    ],
  },
  {
    year: "2020",
    results: [
      {
        event: "Ontario District - Humber College Event - 16th place",
        subpoints:["Alliance 8 pick 1", "Eliminated in Quarterfinals (7-8th place)"]
      },
    ],
  },
  {
    year: "2019",
    results: [
      {
        event: "Ontario District - Humber College Event - 16th place",
        subpoints:["Alliance 2 pick 2", "Eliminated in Quarterfinals (7-8th place)"]
      },
      {
        event: "Ontario District - Ryerson University Event - 28th place",
        subpoints:["Alliance 5 pick 2", "Eliminated in Semi finals(3-4th place)"]
      },
      {
        event: "Overtime Sunday - 15th place",
        subpoints:["Alliance 4 pick 1", "Eliminated in Semi finals (3-4th place)"]
      }
    ],
  },
  {
    year: "2018",
    results: [
      {
        event: "Ontario District - Ryerson University Event - 13th place",
        subpoints: ["Alliance 3 pick 2", "Eliminated in Semi finals"],
      },
      {
        event: "Ontario District - McMaster University Event - 26th place",
        subpoints: ["Alliance 3 pick 2", "Finalists (2nd Place)"],
      },
    ],
  },
  {
    year: "2017",
    results: [
      {
        event: "Ontario District - Georgian College Event - 27th place",
      },
      {
        event: "Ontario District - Western University, Engineering Event - 25th place",
      },
    ],
  },
  {
    year: "2016",
    results: [
      {
        event: "Greater Toronto East Regional - 25th place",
      },
    ],
  },
  {
    year: "2015",
    results: [
      {
        event: "Waterloo Regional - 12th place",
        subpoints: [
          "Alliance 8 captains",
          "Eliminated in Quarter finals (7–8th place)",
        ],
      },
    ],
  },
  {
    year: "2014",
    results: [
      {
        event: "Greater Toronto West Regional - 12th place",
        subpoints: [
          "Alliance 4 pick 1",
        ],
      },
    ],
  },
  {
    year: "2012",
    results: [
      {
        event: "Greater Toronto West Regional - 55th place",
      },
    ],
  },
];

export default function Docs() {
  const [members, setMembers] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [years, setYears] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const counter = (setter: (n: number) => void, max: number, duration: number) =>
  {
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
    <div>
      <div className = "mb-5">
        <div className="w-full relative">
          <Image
            width={6000}
            height={3000}
            src={"/big-image.jpg"}
            alt=""
            className="w-screen h-[calc(100vh-16*var(--spacing))] object-cover brightness-67"
          />
        </div>
        <div className="absolute top-0 w-full h-full flex flex-row">
            <div className="my-auto w-full">
              <h1 className="text-7xl font-medium text-background text-center">About Us</h1>
            </div>
        </div>
      </div>
      <div className = "m-7 mt-5">
        <h1 className = "text-5xl mb-2 font-extrabold">Our Team and FIRST</h1>
        <p className = "text-left text-2xl pl-1">Our Team is an amalgamation of students with distinct talents and abilities while being guided by our mentors from diverse fields and expertise, striving to build competitive robots in order to inspire and shape our youth.</p>
        <div className = "mt-3">
            <button className = "w-80 border-2 border-red-900 text-red-900 p-2 rounded-lg hover:bg-red-100 mr-2" onClick={() => window.open('https://www.firstinspires.org/programs/frc/', '_blank', 'noopener, noreferrer')}>Learn More about FIRST</button>
            <button className = "w-80 border-2 border-red-900 text-red-900 p-2 rounded-lg hover:bg-red-100" onClick={() => window.open('https://frc-events.firstinspires.org/team/4308', '_blank', 'noopener, noreferrer')}>Learn more about FIRST and Team 4308</button>
        </div>
      </div>
      <div className="content-center m-5" ref={containerRef}>
        <h1 className = "text-5xl text-center mt-5 mb-7.5">Our Team In Numbers</h1>
        <div className = "flex justify-evenly">
          <div className = "flex flex-col items-center transition-all duration-500">
            <h1 className = "text-6xl font-semibold">{members}+</h1>
            <p className = "text-3xl">Members</p>
          </div>
          <div className = "flex flex-col items-center">
            <h1 className = "text-6xl font-semibold">{alumni}+</h1>
            <p className = "text-3xl">Alumni</p>
          </div>
          <div className = "flex flex-col items-center">
            <h1 className = "text-6xl font-semibold">{years}+</h1>
            <p className = "text-3xl">Years</p>
          </div>
        </div>
      </div>
      <h1 className = "text-center text-6xl ">Achievements</h1>
      <div className = "m-5">
        <Accordion.Root type = "single" collapsible className = "w-full max-w-[62.5%] mx-auto">
          {competitionData.map((yearData) => (
            <Accordion.Item 
              key = {yearData.year}
              value = {yearData.year}
              className = "m-3"
            >
              <Accordion.Header>
                <Accordion.Trigger className = "w-full relative flex items-center text-left rounded-md hover:bg-gray-200 px-4 py-2 text-2xl font-semibold border-2 border-red-800 [&[data-state=open]>span>svg]:rotate-45">
                  <span className = "pr-2">
                    <PlusIcon className = "w-6 h-6 transition-transform duration-200"/>
                  </span>
                  {yearData.year}
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="overflow-hidden AccordionContent">
                <ul className="list-outside list-disc text-gray-700">
                  {yearData.results.map((result, id)=>(
                    <li key={id}>
                      <ul className="pt-2 pl-2 list-disc list-inside text-xl">{result.event}</ul>
                      <ul className="pl-8 list-disc list-inside">
                        {result.subpoints?.map((subpointed, l)=>(
                          <li key={l}>{subpointed}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
