import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import path from "path";

function className(cls: string): MarkdownToJSX.Override {
  return { props: { className: cls } };
}

export default function CustomMarkdown({
  children,
  dir,
}: {
  children: string;
  dir: string;
}) {
  function img({
    title,
    alt,
    src,
  }: {
    title: string;
    alt: string;
    src: string;
  }) {
    const dim = title.split(" ");
    return (
      <Image
        src={path.join("/images/", dir, src)}
        alt={alt || ""}
        width={parseInt(dim[0])}
        height={parseInt(dim[1])}
        className={`mx-auto object-cover w-full rounded-lg`}
      />
    );
  }

  function a({
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

  return (
    <Markdown
      options={{
        overrides: {
          p: className("text-lg"),
          h1: className("text-5xl"),
          h2: className("text-4xl"),
          h3: className("text-3xl"),
          img: {
            component: img,
          },
          a: {
            component: a,
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
}
