import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import CustomCarousel from "./custom-carousel";

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
    const realSrc = path.join("/res/", dir, src);
    return alt == "carousel" ? (
      <CustomCarousel
        src={realSrc}
        className="mt-8"
        childClass={title}
        responsive={{
          all: {
            breakpoint: { max: 100000, min: 0 },
            items: 1
          }
        }}
      />
    ) : (
      <Image
        src={realSrc}
        alt=""
        fill
        className={`mx-auto object-cover w-full rounded-lg ${title}`}
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

  function video({ src, className }: { src: string, className?: string }) {
    return (
      <video controls className={className}>
        <source src={path.join("/res", dir, src)} type={``} />
      </video>
    );
  }

  return (
    <Markdown
      className="flex flex-col gap-4"
      options={{
        overrides: {
          p: {
            component: ({ children }) => {
              if (children && children[0].type == img) {
                return <div>{children}</div>;
              }
              return <p className="text-lg">{children}</p>;
            },
          },
          h1: className("text-5xl"),
          h2: className("text-4xl"),
          h3: className("text-3xl"),
          img: {
            component: img
          },
          video: {
            component: video
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
