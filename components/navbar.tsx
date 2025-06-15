"use client";

import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "radix-ui";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    const listener = () => setNav(false);
    window.addEventListener("orientationchange", listener);
    return () => window.removeEventListener("orientationchange", listener);
  });

  const path = usePathname();

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
      <NavigationMenu.Item className="relative">
        <NavigationMenu.Trigger
          className={`group ${path.split("/").slice(1)[0] === hrefBase.slice(1) ? "text-nav-current" : ""} ${trigger} flex flex-row`}
        >
          {label}
          <ChevronDownIcon
            className={`transition-transform group-data-[state=open]:rotate-180 ${transition} static size-4 self-center p-[-25%]`}
          />
        </NavigationMenu.Trigger>

        <NavigationMenu.Content className="content md:bg-background flex overflow-hidden text-nowrap max-sm:px-6 md:absolute md:top-[100%] md:left-[50%] md:translate-x-[-50%] md:text-center">
          <ul className="flex flex-col gap-2 md:items-center md:gap-px">
            <div className="h-0 md:hidden" />
            {items.map(({ href, label }) => {
              return (
                <div
                  key={label}
                  className="md:bg-nav-dropdown w-full md:px-5 md:py-2"
                >
                  <NavigationMenu.Link
                    href={hrefBase + href}
                    className={`${path === hrefBase + href ? "text-nav-current" : ""} ${trigger}`}
                  >
                    {label}
                  </NavigationMenu.Link>
                </div>
              );
            })}
            <div className="h-2 md:hidden" />
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Root className="bg-foreground text-background fixed top-0 z-50 flex w-full flex-row items-center bg-size-[100%] px-6 py-3 text-lg font-semibold transition-none select-none lg:px-[10%] xl:px-[15%] 2xl:px-[20%]">
      <Logo className="mr-auto md:ml-2" />
      <div
        className={`size-9 md:hidden ${nav ? "z-50" : "z-51"}`}
        onClick={() => setNav(true)}
      >
        <HamburgerMenuIcon className="size-full" />
      </div>

      <div
        className={`fixed top-0 left-0 z-50 flex h-screen w-screen bg-black md:hidden ${nav ? "opacity-30" : "opacity-0"} transition-opacity ${transition}`}
        onClick={() => setNav(false)}
      />

      <NavigationMenu.List
        className={`${nav ? "left-0" : "left-[-65%]"} bg-foreground fixed top-0 z-50 flex h-full w-[65%] flex-col gap-4 px-10 transition-[left] md:static md:w-auto md:flex-row md:items-center md:gap-2 md:p-0 ${transition} overflow-scroll md:transition-none`}
      >
        <Logo className="mb-6 md:hidden" />

        <SimpleItem href="/" label="Home" />
        <Seperator />

        <SimpleItem href="/about" label="About Us" />
        <Seperator />

        <ComplexItem
          label="Outreach"
          hrefBase="/outreach"
          items={[
            { href: "/fll", label: "FLL" },
            { href: "/tree-planting", label: "Tree Planting" },
          ]}
        />
        <Seperator />

        <ComplexItem
          label="Resources"
          hrefBase="/resources"
          items={[
            { href: "/docs", label: "Documentation" },
            { href: "/blogs", label: "Blogs" },
          ]}
        />
        <Seperator />

        <SimpleItem href="/sponsors" label="Sponsors" />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function Logo({ className }: { className: string | undefined }) {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width={128}
      height={128}
      className={`size-10 ${className}`}
    />
  );
}

function Seperator() {
  return <div className="bg-background h-px w-full md:h-9 md:w-px" />;
}

const transition = "ease-in-out duration-200";
const trigger = `md:px-2 md:py-1 trigger transition-colors ease-in-out duration-400`;
