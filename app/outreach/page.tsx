'use client'

import HeroBanner from "@/components/hero-banner";
import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef } from "react";

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          counter(setTrees, 200, 1000);
          counter(setCarbon, 1026, 1000);
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
      <div className="content-center pt-10 mb-5 pb-15 bg-nav text-red-100" ref={containerRef}>
        <h1 className="text-6xl text-center mt-5 mb-7.5 font-bold">4308 Outreach Has</h1>
        <div className="grid grid-cols-2 gap-x-[10%] text-center">
          <div className="flex flex-col items-end space-y-3">
            <h1 className="text-5xl font-semibold leading-none">Planted:</h1>
            <h1 className="text-5xl font-semibold leading-none">Carbon Offset:</h1>
          </div>
          <div className="flex flex-col items-start space-y-3">
            <p className="text-5xl leading-none">{trees}+ Trees</p>
            <p className="text-5xl leading-none">{carbon}+ Kgs</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex items-start gap-4 pb-4">
          <div className="">
            <div className="relative w-[400px] h-[500px] overflow-hidden rounded-lg">
              <Image
                src={"/big-image.jpg"}
                alt=""
                fill
                className="object-cover"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2">
            <h1 className="text-5xl">Hack::Peel</h1>
            <p className="text-lg mt-2">We compete annually in regional robotics competitions.</p>
            <p className="text-lg">Our team focuses on innovation and sustainability outreach.</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pt-8">
        <div className="flex items-start gap-4 pb-4 flex-row-reverse">
          <div className="">
            <div className="relative w-[400px] h-[500px] overflow-hidden rounded-lg">
              <Image
                src={"/big-image.jpg"}
                alt=""
                fill
                className="object-cover"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2">
            <h1 className="text-5xl">4308 and Tree Planting</h1>
            <p className="text-lg mt-2">We compete annually in regional robotics competitions.</p>
            <p className="text-lg">Our team focuses on innovation and sustainability outreach.</p>
          </div>
        </div>
      </div>
      <div className="justify-center">
        <h1 className="text-6xl text-center">Featured on:</h1>
        <div className="flex justify-center gap-5 pt-4 pb-8">
          <div className="flex flex-col">
            <p className="text-2xl text-center">Humber</p>
            <a href={`https://humbernews.ca/2023/03/absolute-robotics-won-bronze-in-first-robotics-despite-setbacks/`}>
              <div className="relative w-[200] h-[200px] overflow-hidden rounded-lg">
                <Image
                  src={"/big-image.jpg"}
                  alt=""
                  fill
                  className="object-cover"
                ></Image>
              </div>
            </a>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl text-center">Woodstock</p>
            <a href={`https://humbernews.ca/2023/03/absolute-robotics-won-bronze-in-first-robotics-despite-setbacks/`}>
              <div className="relative w-[200] h-[200px] overflow-hidden rounded-lg">
                <Image
                  src={"/big-image.jpg"}
                  alt=""
                  fill
                  className="object-cover"
                ></Image>
              </div>
            </a>
          </div>

          <div className="flex flex-col">
            <p className="text-2xl text-center">William Qin</p>
            <a href={`https://williamqin.com/projects/robotics/`}>
              <div className="relative w-[200] h-[200px] overflow-hidden rounded-lg">
                <Image
                  src={"/big-image.jpg"}
                  alt=""
                  fill
                  className="object-cover"
                ></Image>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
