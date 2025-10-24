'use client'

import {useState} from "react";
import Image from "next/image";
import Dropdown from "@/components/paragraph-dropdown"
import React from "react";

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
        <h1 className = "text-5xl text-center mb-7.5">Our Team In Numbers</h1>
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

      <div className = 'm-5'>
        <Dropdown title="2012">
          <ul>
            <li>Greater Toronto West Regional - 55th place</li>
          </ul>
        </Dropdown>
        <Dropdown title="2014">
          <ul>
            <li>Greater Toronto West Regional - 12th place</li>
            <li className = "pl-5">Alliance 4 pick 1</li>
          </ul>
        </Dropdown>
        <Dropdown title="2015">
          <ul>
            <li>Waterloo Regional - 12th place</li>
            <li className = "pl-5">Alliance 8 captains</li>
            <li className = "pl-5">Eliminated in Quarter finals (7-8th place)</li>
          </ul>
        </Dropdown>
        <Dropdown title = "2016">
          <ul>
            <li>Greater Toronto East Regional - 25th place</li>
          </ul>
        </Dropdown>
        <Dropdown title = "2017">
          <ul>
            <li>Ontario District - Georgian College Event - 27th place</li>
            <li>Ontario District - Western University, Engineering Event - 25th place</li>
          </ul>
        </Dropdown>
        <Dropdown title = "2018">
          <ul>
            <li>Ontario District - Ryerson University Event - 13th place</li>
            <li className = "pl-5">Alliance 3 pick 2</li>
            <li className = "pl-5">Eliminated in Semi finals (3-4th place)</li>
            <li>Ontario District - McMaster University Event - 26th place</li>
            <li className = "pl-5">Alliance 3 pick 2</li>
            <li className = "pl-5">Finalists (2nd Place)</li>
            <li>FIRST Ontario Provincial Championship - Technology Division - 20th place</li>
            <li className = "pl-5">Alliance 1 pick 2</li>
            <li className = "pl-5">Finalists (2nd Place)</li>
            <li>FIRST World Championship - Daly Division - 52nd place</li>
            <li className = "pl-5">Alliance 6 pick 3</li>
            <li className = "pl-5">Eliminated in Semi finals (3-4th place)</li>
            <li>Fall Fiesta Junior - 15th place</li>
            <li className = "pl-5">Alliance 2 Pick 2</li>
            <li>The STEMley Cup Championship - 20th place</li>
            <li className = "pl-5">Alliance 3 Pick 2</li>
            <li className = "pl-5">Winners (Champions)</li>
          </ul>
        </Dropdown>
      </div>
    </div>
  );
}
