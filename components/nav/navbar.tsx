"use client";

import { ChevronDownIcon, Cross1Icon, HamburgerMenuIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "radix-ui";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Kdam_Thmor_Pro } from "next/font/google";

const kdamFont = Kdam_Thmor_Pro({
  weight: "400",
  subsets: ["latin"]
});

export default function NavBar() {
  const path = usePathname();
  const [isMobileOpen, setMobileOpen] = useState(false)

  function SimpleItem({ href, label }: { href: string; label: string }) {
    return (
      <NavigationMenu.Item className={triggerItem}>
        <NavigationMenu.Link
          href={href}
          className={`${path === href ? "text-nav-current" : ""} ${trigger} flex flex-row`}
        >
          {label}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }

  function ComplexItem({
    label,
    hrefBase,
    items,
  }: {
    label: string;
    hrefBase: string;
    items: { href: string; label: string }[];
  }) {
    return (
      <NavigationMenu.Item className={`md:relative max-md:flex max-md:flex-col ${triggerItem}`}>
        <NavigationMenu.Trigger
          className={`group ${path.split("/").slice(1)[0] === hrefBase.slice(1) ? "text-nav-current" : ""} ${trigger} flex flex-row gap-2`}
        >
          {label}
          <ChevronDownIcon
            className={`transition-transform group-data-[state=open]:rotate-180 tduration-300 ease-in-out static md:size-4 max-md:size-5`}
          />
        </NavigationMenu.Trigger>

        <NavigationMenu.Content className="content md:rounded-md md:bg-nav-dropdown overflow-hidden max-md:static md:absolute md:top-[100%] md:left-[50%] md:translate-x-[-50%]">
          <ul className="flex flex-col items-center min-w-48 w-full">
            {items.map(({ href, label }, index) => {
              return (
                <li key={index} className="w-full">
                  {index > 0 ?
                    <div className="w-[calc(100%-8*var(--spacing))] h-px bg-background/38 mx-auto max-md:hidden" /> : <></>
                  }
                  <NavigationMenu.Link
                    href={hrefBase + href}
                    key={label}
                    className={`w-full ${path === hrefBase + href ? "text-nav-current" : ""} ${trigger} group flex items-center justify-between gap-4 px-4 py-2 text-nowrap`}
                  >
                    {label}
                    <ArrowRightIcon className="transition-[opacity] opacity-0 md:size-4 max-md:size-5 ml-auto group-hover:opacity-100" />
                  </NavigationMenu.Link>
                </li>
              );
            })}
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    );
  }

  return (
    <>
      <NavigationMenu.Root className="bg-nav text-background fixed top-0 z-50 w-full px-4 max-lg:py-2 lg:py-4 max-lg:text-lg lg:text-xl select-none transition-none drop-shadow-md/75">
        <div className={`z-60 fixed top-0 left-0 bg-black h-[100vh] w-[100vw] md:hidden transition-[opacity] ${isMobileOpen ? "opacity-30" : "opacity-0"} duration-500 pointer-events-none`} />
        <div className="max-md:justify-between min-md:justify-around mx-auto flex h-full flex-row items-center gap-8">
          <Logo isOpen={isMobileOpen} />

          {/* Navigation List */}
          <NavigationMenu.List
            className={`${isMobileOpen ? 'translate-x-[-100%]' : 'translate-x-0'}
              max-md:top-0 max-md:left-[100vw] max-md:gap-5 max-md:flex max-md:fixed max-md:h-[100vh] max-md:w-[70vw] max-md:flex-col max-md:bg-nav max-md:duration-500 max-md:transition-transform max-md:pt-20 max-md:px-10 max-md:text-2xl max-sm:text-xl
              md:static md:flex md:flex-row md:items-center md:gap-6 md:p-0 z-70`
            }>
            <SimpleItem href="/" label="Home" />
            <Seperator />

            <SimpleItem href="/about" label="About Us" />
            <Seperator />

            <SimpleItem href="/outreach" label="Outreach" />
            <Seperator />

            <ComplexItem
              label="Resources"
              hrefBase="/resources"
              items={[
                { href: '/docs', label: 'Documentation' },
                { href: '/blog', label: 'Blog' },
              ]}
            />
            <Seperator />

            <SimpleItem href="/sponsors" label="Sponsors" />

            <button
              className="py-2 md:hidden absolute top-2.5 right-4.5"
              onClick={() => setMobileOpen(false)}
            >
              <Cross1Icon className="size-8" />
            </button>
          </NavigationMenu.List>

          {/* Hamburger Button (visible only on mobile) */}
          <button
            className="py-2 min-md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <HamburgerMenuIcon className="size-8" />
          </button>
        </div>
      </NavigationMenu.Root>
    </>
  )
}

function Logo({ className }: { className?: string, isOpen?: boolean }) {
  return (
    <div className={`flex flex-row gap-6 items-center`}>
      <Link
        href="/"
        className="flex flex-row items-center gap-6"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={128}
          height={128}
          className={`size-10 my-1 ${className}`}
        />
        <h2 className={`max-lg:hidden text-3xl font-medium ${kdamFont.className}`}>Team 4308</h2>
      </Link>
    </div>
  );
}

function Seperator() {
  return <div className="max-md:hidden bg-background/38 h-4 w-px" />;
}

const triggerItem = "md:h-12"
const trigger = "trigger transition-colors ease-in-out duration-300 md:h-12 items-center max-md:w-full";
