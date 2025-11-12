/** Tips / Admonitions (syntax, but replaces <blockquote> tag)
 *  @usage Inside markdown files (.md) write "> [!tip_type]"
 *  @info Check the @type 'TLabel' for available tip types
 *  If none matched, will return a fallback blockquote as if only started with ">"
 * */

import { Info, Lightbulb, AlertTriangle, AlertOctagon } from "lucide-react"
import React from "react"

type TLabel = "note" | "tip" | "warning" | "caution"
const containerDefaults = "border-l-4 bg-zinc-100 p-4 rounded-md shadow"

const types = {
    note: { icon: Info, color: "border-blue-500 text-blue-400", label: "Note" },
    tip: { icon: Lightbulb, color: "border-green-500 text-green-400", label: "Tip" },
    warning: { icon: AlertTriangle, color: "border-yellow-500 text-yellow-500", label: "Warning" },
    caution: { icon: AlertOctagon, color: "border-red-500 text-red-400", label: "Caution" },
}

const Admonition = ({ type, children }: { type: TLabel, children: React.ReactNode }) => {
    const { icon: Icon, color, label } = types[type]
    return (
        <div className={`${containerDefaults} ${color} flex gap-3 items-start`}>
            <Icon className="mt-1 shrink-0" size={18} />
            <div>
                <p className={`font-semibold ${color.split(" ")[1]}`}>{label}</p>
                <div className="text-base text-foreground">{children}</div>
            </div>
        </div>
    )
}

export const Blockquote = ({ children }: { children: React.ReactNode }) => {
    const nodes = React.Children.toArray(children)
    if (!nodes.length) return null

    const first = nodes[0]
    let text = ''

    if (React.isValidElement<{ children?: React.ReactNode }>(first))
        text = React.Children.toArray(first.props.children).join('')
    else if (typeof first === 'string')
        text = first


    // "It’s some form of Elvish.. I can’t read it!" LMAO
    const match = /^(note|tip|warning|caution)\b/i.exec(text.trim())
    if (match) {
        const type = match[1].toLowerCase() as TLabel

        const cleaned = nodes.map(child => {
            if (typeof child === 'string')
                return child.replace(/^(note|tip|warning|caution)\b[:\s-]*/i, '')

            if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
                const inner = React.Children.toArray(child.props.children).map(c =>
                    typeof c === 'string'
                        ? c.replace(/^(note|tip|warning|caution)\b[:\s-]*/i, '')
                        : c
                )
                return React.cloneElement(child, {}, inner)
            }

            return child
        })

        return <Admonition type={type}>{cleaned}</Admonition>
    }

    return (
        <blockquote className={`${containerDefaults} border-b-foreground/30 italic`}>
            {children}
        </blockquote>
    )
}