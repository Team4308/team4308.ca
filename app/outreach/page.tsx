'use client'

import HeroBanner from "@/components/hero-banner";
import { fontSize } from "@/utils/textStyles";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";

function Thing({ title, imgSrc, imgPos, children }: { imgSrc: string, imgPos: "left" | "right", title: string, children: ReactNode }) {
  return (
    <div className="w-full flex justify-center">
      <div className={`flex items-start max-sm:gap-4 max-md:gap-6 md:gap-8 max-w-4xl px-5 ${imgPos == "right" ? "flex-row-reverse" : ""}`}>
        <div className="my-auto max-sm:hidden">
          <div className="relative sm:w-[40vw] lg:w-100 aspect-4/5 overflow-hidden rounded-lg">
            <Image
              src={imgSrc}
              alt=""
              fill
              className="object-cover"
            ></Image>
          </div>
        </div>
        <div className={`flex flex-col items-start justify-start pt-2 my-auto gap-5 ${fontSize.md3}`}>
          <h1 className={fontSize.x3l3}>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

function Thing2(props: { val: number, label: string }) {
  return (
    <div className="items-center">
      <h1 className={`${fontSize.x4l3} font-semibold`}>{props.val}+</h1>
      <p className={fontSize.xl3}>{props.label}</p>
    </div>
  );
}

export default function Outreach() {
  const [carbon, setCarbon] = useState(0);
  const [trees, setTrees] = useState(0);
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
    const curr = new Date();
    const diff = (curr.getTime() - new Date("May 27, 2025").getTime()) / 1000 / 60 / 60 / 24;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          counter(setTrees, 200, 1000);
          counter(setCarbon, Math.floor(12 * diff), 1000);
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
      <HeroBanner
        src="big-image.jpg"
        title="Outreach"
      />

      <div className="h-10" />

      <Thing imgPos="right" title="4308 tree planting" imgSrc="/res/blog/tree-planting/tree-planting-carousel/tree-planting (2).jpg">
        <p>
          In May of 2025, team 4308 collaborated with the
          City of Mississauga to plant trees in the
          Woodlands Meadow Park.
        </p>
        <p>
          Around 15 volunteers and team members spent 3 hours
          their afternoon planting a total of 200 trees!
        </p>
        <p>
          The trees that we planted offsets around 12kg of
          carbon dioxide every single day!
        </p>
      </Thing>

      <div
        ref={containerRef}
        className="my-10 content-center bg-gray-200 py-10 text-center"
      >
        <h1 className={`mb-4 ${fontSize.x3l3}`}>
          4308 outreach has
        </h1>

        <div className="flex justify-evenly">
          <Thing2 val={trees} label="Trees planted" />
          <Thing2 val={carbon} label="kgs carbon offset" />
        </div>
      </div>
      <Thing imgPos="left" title="hack:peel" imgSrc="/big-image.jpg">
        <p>
          Team 4308 is collaborating with the Woodlands computer science club
          to bring you hack::peel 2026! hack::peel is a 24-hour hackathon
          that gives students real experience and the opportunity to build
          something great!
        </p>
        <p>
          The last time hack::peel was run, we attracted more than 100
          participants. We gave nearly $15,000 worth of prizes.
        </p>
        <p>
          This year, hack::peel is planning to run again in late May.
          Make sure to check
          out <Link href="" target="_blank" className="text-link hover:text-link-hover">hack-peel.</Link> for
          more details!
        </p>
      </Thing>
      <div className="h-10" />
    </div>
  );
}
