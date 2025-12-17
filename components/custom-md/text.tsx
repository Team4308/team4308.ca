import Link from "next/link";
import { ReactNode } from "react";

export function a({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: string;
}) {
  return (
    <Link
      href={href}
      className="text-link hover:text-link-hover underline transition-colors duration-200 ease-in-out"
      prefetch={title !== "external"}
    >
      {children}
    </Link>
  );
}

export function ol({ start, children }: { start: number, children: ReactNode }) {
  return (
    <ol start={start} className="list-decimal ml-10">
      {children}
    </ol>
  );
}

export function ul({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc ml-10">
      {children}
    </ul>
  );
}
