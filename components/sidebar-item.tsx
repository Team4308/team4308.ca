"use client";

import Link from "next/link";
import path from "path";
import React, { ReactNode } from "react";

type Props = {
  hasChildren: boolean;
  children: ReactNode;
  title: string;

  clickable: boolean;
  path: string;
  defaultOpen: boolean;
};
type State = {
  open: boolean;
};

export default class SideBarItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  render(): ReactNode {
    const cls = this.props.defaultOpen ? "text-blue-200" : "";
    return (
      <>
        {this.props.clickable ? (
          <Link
            className={cls}
            href={path.join("/resources/docs", this.props.path)}
          >
            {this.props.title}
          </Link>
        ) : (
          <p className={cls}>{this.props.title}</p>
        )}
        {this.props.hasChildren && this.state.open && (
          <ul className="flex flex-col pl-4">{this.props.children}</ul>
        )}
      </>
    );
  }
}
