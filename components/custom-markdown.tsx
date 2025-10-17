import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import CustomCarousel from "./custom-carousel";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
        <source src={path.join("/res", dir, src).replace(/\\/g, '/')} type={``} />
      </video>
    );
  }

  /** Code snippet
   *  @usage Inside markdown files (.md) write a <code> element
   *  - with the content followed by the format:
   *    ```[language_extension]
   *        [your_code]
   *    ```
   * */
  function code({
    className,
    children,
  }: {
    className?: string;
    children: string;
  }) {
    const language = className?.replace("lang-", "").replace("language-", "");

    // Fenced code block (```tsx ... ```):
    if (language) {
      return (
        <SyntaxHighlighter
          style={coldarkDark}
          language={language}
          showLineNumbers
          customStyle={{
            borderRadius: "0.75rem",
            padding: "1rem",
            fontSize: "0.875rem",
            background: "var(--code-bg, #282c34)",
          }}
        >
          { String(children).replace(/\n$/, "") }
        </SyntaxHighlighter>
      );
    }

    // Inline code (`inline`)
    return (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
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
          img:   { component: img },
          video: { component: video },
          a:     { component: a, },
          code:  { component: code }
        },
      }}
    >
      {children}
    </Markdown>
  );
}
