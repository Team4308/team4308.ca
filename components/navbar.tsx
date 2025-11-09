"use client";

import { ChevronDownIcon, Cross1Icon, HamburgerMenuIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "radix-ui";
import Image from "next/image";
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
      <NavigationMenu.Item>
        <NavigationMenu.Link
          href={href}
          className={`${path === href ? "text-nav-current" : ""} ${trigger}`}
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
      <NavigationMenu.Item className="relative top">
        <NavigationMenu.Trigger
          className={`group ${path.split("/").slice(1)[0] === hrefBase.slice(1) ? "text-nav-current" : ""} ${trigger} flex flex-row gap-2`}
        >
          {label}
          <ChevronDownIcon
            className={`transition-transform group-data-[state=open]:rotate-180 ${transition} static size-4 self-center p-[-25%]`}
          />
        </NavigationMenu.Trigger>

        <NavigationMenu.Content className="z-20 content rounded bg-nav-dropdown overflow-hidden absolute md:top-[100%] max-md:left-full md:left-[50%] translate-x-[-50%]">
          <ul className="flex flex-col items-center min-w-48 w-full">
            {items.map(({ href, label }, index) => {
              return (
                <li key={index} className="w-full group">
                  {index > 0 &&
                    <div className="w-[calc(100%-8*var(--spacing))] h-px bg-background/38 mx-auto" />
                  }
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 w-full px-4 py-2 text-nowrap text-left"
                  >
                    <NavigationMenu.Link
                      href={hrefBase + href}
                      className={`grow shrink w-full ${path === hrefBase + href ? "text-nav-current" : ""} ${trigger}`}
                    >
                      {label}
                    </NavigationMenu.Link>
                    <ArrowRightIcon className="opacity-0 -translate-x-full inline-flex size-4 group-hover:translate-0 group-hover:opacity-100" />
                  </div>
                </li>
              );
            })}
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Root className="bg-nav text-background fixed top-0 z-50 w-full px-6 py-4 text-lg select-none transition-none drop-shadow-md/75">
      <div className="max-md:container max-md:justify-between min-md:justify-around mx-auto flex h-full flex-row items-center gap-8">
        <Logo isOpen={isMobileOpen} />

        {/* Navigation List */}
        <NavigationMenu.List
          style={{ position: 'static' }}
          className={`${isMobileOpen ? 'flex' : 'hidden'
            } max-md:absolute max-md:left-0 max-md:top-full max-md:w-full max-md:flex-col max-md:bg-nav max-md:gap-4 max-md:p-4
          md:static md:flex md:flex-row md:items-center md:gap-6 md:p-0 transition-[left]`
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
        </NavigationMenu.List>

        {/* Hamburger Button (visible only on mobile) */}
        <button
          className="mb-auto min-md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <Cross1Icon className="size-6" /> : <HamburgerMenuIcon className="size-6" />}
        </button>
      </div>
    </NavigationMenu.Root>
  )
}

function Logo({ className, isOpen = false }: { className?: string, isOpen?: boolean }) {
  return (
    <div className={`${isOpen && 'hidden'} flex flex-row gap-6 items-center`}>
      <Image
        src="/logo.png"
        alt="logo"
        width={128}
        height={128}
        className={`size-10 my-1 ${className}`}
      />
      <h2 className={`max-lg:hidden text-3xl font-medium ${kdamFont.className}`}>Team 4308</h2>
    </div>
  );
}

function Seperator() {
  return <div className="max-md:hidden bg-background/38 h-4 w-px" />;
}

const transition = "ease-in-out duration-100";
const trigger = `py-1 trigger transition-colors ease-in-out duration-100`;
