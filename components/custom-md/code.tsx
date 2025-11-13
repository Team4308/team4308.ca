import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
                {String(children).replace(/\n$/, "")}
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