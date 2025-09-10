"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "radix-ui";

export default function NavBar() {
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

        <NavigationMenu.Content className="content bg-background flex overflow-hidden rounded-lg text-nowrap absolute top-[100%] left-[50%] translate-x-[-50%] text-center">
          <ul className="flex flex-col items-center gap-px">
            {items.map(({ href, label }) => {
              return (
                <div
                  key={label}
                  className="bg-nav-dropdown w-full px-5 py-2"
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
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Root className="bg-nav text-background fixed flex flex-row items-center top-0 z-50 w-full bg-size-[100%] px-2 py-2 text-lg font-semibold transition-none select-none">
      <Logo className="ml-2 mr-auto" />

      <NavigationMenu.List
        className={`bg-nav top-0 flex h-full transition-[left] static w-auto flex-row items-center gap-2 p-0`}
      >
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
            { href: "/blog", label: "Blog" },
          ]}
        />
        <Seperator />

        <SimpleItem href="/sponsors" label="Sponsors" />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width={128}
      height={128}
      className={`size-10 my-1 ${className}`}
    />
  );
}

function Seperator() {
  return <div className="bg-background h-9 w-px" />;
}

const transition = "ease-in-out duration-200";
const trigger = `px-2 py-1 trigger transition-colors ease-in-out duration-400`;
