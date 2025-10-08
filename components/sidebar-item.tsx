"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import path from "path";
import React, { ReactNode } from "react";

type Props = {
  hasContent: boolean;
  children: ReactNode[];
  title: string;

  hrefPath: string;
  onRoute: boolean;
};
type State = {
  open: boolean;
  hovering: boolean;
};

export default class SideBarItem extends React.Component<Props, State> {
  readonly hasChildren: boolean;

  constructor(props: Props) {
    super(props);
    this.state = {
      open: props.onRoute,
      hovering: false,
    };
    this.hasChildren = this.props.children.length > 0;
  }

  render(): ReactNode {
    const cls = "text-nowrap pl-1 w-full";
    const clsBtn = `${this.props.onRoute || this.state.hovering ? "bg-nav-dropdown" : ""} hover:bg-sidebar-hover`
    return (
      <>
        <div className="flex flex-row gap-1" onMouseEnter={() => { this.setState({ hovering: true }) }} onMouseLeave={() => this.setState({ hovering: false })}>
          <div className={`flex w-full ${clsBtn} rounded-l-lg ${!this.hasChildren ? "rounded-r-lg" : ""} p-1`}>
            {this.props.hasContent ?
              <Link
                className={cls}
                href={path.join("/resources/docs", this.props.hrefPath)}
              >
                {this.props.title}
              </Link> :
              <p className={cls}>{this.props.title}</p>
            }
          </div>

          {this.hasChildren &&
            <div
              className={`w-12 flex ${clsBtn} rounded-r-lg`}
              onClick={() => {
                this.setState({ open: !this.state.open });
              }}
            >
              <ChevronDownIcon
                className={`size-5 m-auto ${this.state.open && "rotate-180"} transition-transform`}
              />
            </div>
          }

        </div>
        {this.hasChildren && this.state.open && (
          <ul className="flex flex-col pl-4 gap-1">{this.props.children}</ul>
        )}
      </>
    );
  }
}
