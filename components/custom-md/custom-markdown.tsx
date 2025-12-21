import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import Image from "next/image";
import path from "path";

import CustomCarousel from "../carousel/custom-carousel";
import { Code } from "./code"
import { Blockquote } from './blockquote'
import { a, ol, ul } from "./text";
import { table, td, th } from "./table";

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
        width={parseInt(alt.split("x")[0])}
        height={parseInt(alt.split("x")[1])}
        className={`mx-auto object-cover w-full rounded-lg ${title}`}
      />
    );
  }

  function video({ src, className }: { src: string, className?: string }) {
    return (
      <video controls className={className}>
        <source src={path.join("/res", dir, src).replace(/\\/g, '/')} type={``} />
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
              return <p>{children}</p>;
            },
          },
          h1: className("text-4xl max-sm:text-3xl"),
          h2: className("text-3xl max-sm:text-2xl"),
          h3: className("text-2xl max-sm:text-xlc"),
          img: { component: img },
          video: { component: video },
          a: { component: a, },
          ol: { component: ol },
          ul: { component: ul },
          code: { component: Code },
          blockquote: { component: Blockquote },
          table: { component: table },
          th: { component: th },
          td: { component: td },
        },
      }}
    >
      {children}
    </Markdown>
  );
}
