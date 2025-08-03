"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
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
};

export default class SideBarItem extends React.Component<Props, State> {
  readonly hasChildren: boolean;

  constructor(props: Props) {
    super(props);
    this.state = {
      open: props.onRoute,
    };
    this.hasChildren = this.props.children.length > 0;
  }

  render(): ReactNode {
    const cls = this.props.onRoute ? "text-blue-200" : "";
    return (
      <>
        <div className="flex w-full flex-row">
          {this.props.hasContent ? (
            <Link
              className={cls}
              href={path.join("/resources/docs", this.props.hrefPath)}
            >
              {this.props.title}
            </Link>
          ) : (
            <p className={cls}>{this.props.title}</p>
          )}

          {this.hasChildren && (
            <div
              className="flex size-full flex-row"
              onClick={() => {
                this.setState({ open: !this.state.open });
              }}
            >
              <ChevronRightIcon
                className={`my-auto ml-auto ${this.state.open && "rotate-90"}`}
              />
            </div>
          )}
        </div>

        {this.hasChildren && this.state.open && (
          <ul className="flex flex-col pl-4">{this.props.children}</ul>
        )}
      </>
    );
  }
}
