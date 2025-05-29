"use client"

import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { NavigationMenu } from "radix-ui";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    const listener = ()=>setNav(false);
    window.addEventListener("orientationchange", listener)
    return () =>window.removeEventListener("orientationchange", listener);
  })

  return (
    <NavigationMenu.Root className="fixed flex flex-row top-0 w-screen px-6 lg:px-[20%] py-3 items-center">
      <Logo className="mr-auto ml-2"/>
      <div className={`md:hidden size-9 ${nav ? "z-0" : "z-1"}`} onClick={()=>setNav(true)}><HamburgerMenuIcon className="size-full"/></div>

      <div className={`fixed flex md:hidden top-0 left-0 w-screen h-screen bg-black ${nav ? "opacity-30" : "opacity-0"} ${transition}`} onClick={()=>setNav(false)}/>

      <NavigationMenu.List 
        className={`${nav ? "left-0" : "left-[-65%]"} fixed md:static top-0 flex flex-col md:flex-row gap-4 md:gap-1 w-[65%] md:w-auto h-full 
                    md:items-center bg-foreground px-10 py-3 md:p-0 ${transition} md:transition-none`}
      >
        <Logo className="mb-6 md:hidden"/>

        <SimpleItem href="/" label="Home"/>
        <Seperator/>

        <SimpleItem href="/about" label="About Us"/>
        <Seperator/>

        <ComplexItem label="Outreach" hrefBase="/outreach" items={[
          { href: "/fll", label: "FLL" },
          { href: "/tree-planting", label: "Tree Planting" },
        ]}/>
        <Seperator/>

        <ComplexItem label="Resources" hrefBase="/resources" items={[
          { href: "/docs", label: "Documentation" },
          { href: "/blogs", label: "Blogs" },
        ]}/>
        <Seperator/>

        <SimpleItem href="/sponsors" label="Sponsors"/>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function Logo({className}: {className: string | undefined}) {
  return (
    <Image src="/logo.png" alt="logo" width={128} height={128} className={`size-10 ${className}`}/>
  );
}

function Seperator() {
  return ( <div className="w-full h-px md:w-px md:h-9 bg-background"/> );
}

function SimpleItem({href, label}: {href: string, label: string}) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link href={href} className={`trigger ${trigger}`}>{label}</NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

function ComplexItem({label, hrefBase, items}: {label: string, hrefBase: string, items: {href: string, label: string}[]}) {
  return (
    <NavigationMenu.Item className="relative">
      <NavigationMenu.Trigger className={`trigger ${trigger} flex flex-row`}>{label}<ChevronDownIcon className={`caret transition-transform ${transition} p-[-25%] static size-4 self-center`}/></NavigationMenu.Trigger>
      <NavigationMenu.Content className="content flex md:text-center text-nowrap md:absolute md:top-[100%] md:left-[50%] md:translate-x-[-50%] px-6 md:p-0 md:bg-background">
        <ul className="flex flex-col md:items-center gap-2 md:gap-px">
          <div className="md:hidden h-0"/>
          {items.map(({href, label}) => {
            return (
              <NavigationMenu.Link key={label} href={hrefBase + href} className={`trigger w-full md:px-5 md:py-2 md:bg-nav-dropdown`}>{label}</NavigationMenu.Link>
            );
          })}
          <div className="md:hidden h-2"/>
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

const transition = "ease-in-out duration-300";
const trigger = `md:p-2 ${transition}`;
