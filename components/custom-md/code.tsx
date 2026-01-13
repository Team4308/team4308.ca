import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "./copy-button";

/** Code snippet
 *  @usage Inside markdown files (.md) write a <code> element
 *  - with the content followed by the format:
 *    ```[language_extension]
 *        [your_code]
 *    ```
 * */

export function Code({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  const language = className?.replace("lang-", "").replace("language-", "");


  // Fenced code block (```tsx ... ```):
  if (language) {
    const text = String(children).replace(/\n$/, "");
    return (
      <div className="relative">
        <CopyButton text={text} />
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
          {text}
        </SyntaxHighlighter>
      </div>
    );
  }

  // Inline code (`inline`)
  return (
    <code className="bg-gray-200 border border-gray-300 px-1.5 pt-0.75 pb-0.25 rounded text-sm font-mono">
      {children}
    </code>
  );
}
