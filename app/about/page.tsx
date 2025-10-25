'use client'

import {useState} from "react";
import Image from "next/image";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

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
  return (
    <div>
      <div className = "mb-5">
        <div className="w-full relative">
          <Image
            width={6000}
            height={4000}
            src={"/big-image.jpg"}
            alt=""
            className="w-screen h-[calc(100vh-16*var(--spacing))] object-cover brightness-67"
          />
        </div>
        <div className="absolute top-0 w-full h-full flex flex-row">
            <div className="my-auto w-full">
              <h1
                className="text-7xl font-medium text-background text-center"
              >About Us</h1>
            </div>
        </div>
      </div>
      <div className="content-center m-5">
        <h1 className = "text-5xl text-center mt-5 mb-7.5">Our Team In Numbers</h1>
        <div className = "flex justify-evenly">
          <div className = "flex flex-col items-center">
            <h1 className = "text-6xl font-semibold">80+</h1>
            <p className = "text-3xl">Members</p>
          </div>
          <div className = "flex flex-col items-center">
            <h1 className = "text-6xl font-semibold">500+</h1>
            <p className = "text-3xl">Alumni</p>
          </div>
          <div className = "flex flex-col items-center">
            <h1 className = "text-6xl font-semibold">12+</h1>
            <p className = "text-3xl">Years</p>
          </div>
        </div>
      </div>
      <h1 className = "text-center text-6xl font-semibold">History</h1>
      <div className = "m-5">
        <Accordion.Root type = "single" collapsible className = "w-full max-w-[62.5%] mx-auto">
          {competitionData.map((yearData) => (
            <Accordion.Item 
              key = {yearData.year}
              value = {yearData.year}
              className = "m-3"
            >
              <Accordion.Header>
                <Accordion.Trigger className = "w-full text-left rounded-md hover:bg-gray-200 px-4 py-2 text-2xl font-semibold transition border-2 border-red-800">
                  {yearData.year}
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideFadeDown data-[state=closed]:animate-slideFadeUp">
                <ul className="list-outside list-disc text-gray-700">
                  {yearData.results.map((result, id)=>(
                    <li key={id}>
                      <ul className="pt-2 pl-2 list-disc list-inside text-xl">{result.event}</ul>
                      <ul className="pl-8 list-disc list-inside">
                        {result.subpoints?.map((subpointed)=>(
                          <li>{subpointed}</li>
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
