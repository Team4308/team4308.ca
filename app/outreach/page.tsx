'use client'

import HeroBanner from "@/components/hero-banner";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";

function Featured({ href, title, imgSrc }: { href: string, title: string, imgSrc: string }) {
  return (
    <div className="flex flex-col">
      <p className="text-2xl text-center">{title}</p>
      <a href={href}>
        <div className="relative w-[200] h-[200px] overflow-hidden rounded-lg">
          <Image
            src={imgSrc}
            alt=""
            fill
            className="object-cover"
          ></Image>
        </div>
      </a>
    </div>
  );
}

function Thing({ title, imgSrc, imgPos, children }: { imgSrc: string, imgPos: "left" | "right", title: string, children: ReactNode }) {
  return (
    <div className="w-full flex justify-center mt-16">
      <div className={`flex items-start gap-4 pb-4 w-4xl ${imgPos == "right" ? "flex-row-reverse" : ""}`}>
        <div>
          <div className="relative w-100 h-125 overflow-hidden rounded-lg">
            <Image
              src={imgSrc}
              alt=""
              fill
              className="object-cover"
            ></Image>
          </div>
        </div>
        <div className="text-lg flex flex-col items-start justify-start pt-2 my-auto gap-5">
          <h1 className="text-5xl">{title}</h1>
          {children}
        </div>
      </div>
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
      <div className="content-center mt-20 pt-10 mb-5 pb-15 bg-gray-200" ref={containerRef}>
        <h1 className="text-6xl text-center mt-5 mb-7.5 font-bold">4308 Outreach Has</h1>
        <div className="text-5xl leading-none grid grid-cols-2 gap-x-30 text-center">
          <div className="font-semibold flex flex-col items-end space-y-3">
            <h1>Planted</h1>
            <h1>Carbon offset</h1>
          </div>
          <div className="flex flex-col items-start space-y-3">
            <p>{trees}+ Trees</p>
            <p>{carbon}+ Kgs</p>
          </div>
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

      <div className="justify-center mt-16 mb-10">
        <h1 className="text-6xl text-center">Featured on:</h1>
        <div className="flex justify-center gap-5 pt-4 pb-8">
          <Featured
            title="Humber"
            href="https://humbernews.ca/2023/03/absolute-robotics-won-bronze-in-first-robotics-despite-setbacks/"
            imgSrc="/hero-banner/big-image.jpg"
          />
          <Featured
            title="Woodstock"
            imgSrc="/hero-banner/big-image.jpg"
            href="https://humbernews.ca/2023/03/absolute-robotics-won-bronze-in-first-robotics-despite-setbacks/"
          />
          <Featured
            title="William Qin"
            href="https://williamqin.com/projects/robotics/"
            imgSrc="/hero-banner/big-image.jpg"
          />
        </div>
      </div>
    </div>
  );
}
