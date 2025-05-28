"use client"

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
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
    <NavigationMenu.Root className="flex flex-row fixed top-0 w-screen px-6 lg:px-[20%] py-3 md:py-5 items-center">
      <Image src="/logo.png" alt="logo" width={128} height={128} className="mr-auto size-10"/>
      <div className={`md:hidden size-8 ${nav ? "z-0" : "z-1"}`} onClick={()=>setNav(true)}><HamburgerMenuIcon className="size-full"/></div>

      <div className={`fixed flex md:hidden top-0 left-0 w-screen h-screen backdrop-blur-xs ${nav ? "opacity-100" : "opacity-0"} ease-in-out duration-300`} onClick={()=>setNav(false)}/>

      <NavigationMenu.List 
        className={`${nav ? "left-0" : "left-[-65%]"} fixed md:static top-0 flex flex-col md:flex-row gap-3 md:gap-6 w-[65%] md:w-auto h-full 
                    md:items-center bg-foreground px-10 py-3 md:p-0 ease-in-out duration-300 md:transition-none`}
      >
        <Image src="/logo.png" alt="logo" width={128} height={128} className="mb-6 size-10 md:hidden"/>

        <SimpleItem href="/" label="Home"/>
        <SimpleItem href="/about" label="About Us"/>

        <ComplexItem label="Outreach" items={[
          { href: "/fll", label: "FLL" },
          { href: "/tree-planting", label: "Tree Planting" },
        ]}/>
        <ComplexItem label="Resources" items={[
          { href: "/docs", label: "Documentation" },
          { href: "/blogs", label: "Blogs" },
        ]}/>

        <SimpleItem href="/sponsors" label="Sponsors"/>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function SimpleItem({href, label}: {href: string, label: string}) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link href={href}>{label}</NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

function ComplexItem({label, items}: {label: string, items: {href: string, label: string}[]}) {
  return (
    <NavigationMenu.Item className="relative">
      <NavigationMenu.Trigger>{label}</NavigationMenu.Trigger>
      <NavigationMenu.Content className="flex md:text-center text-nowrap md:absolute md:top-[100%] md:left-[50%] md:translate-x-[-50%] px-4 md:py-3 bg-foreground">
        <ul className="flex flex-col md:items-center">
          {items.map(({href, label}) => {
            return (
              <NavigationMenu.Link key={label} href={href}>{label}</NavigationMenu.Link>
            );
          })}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}
