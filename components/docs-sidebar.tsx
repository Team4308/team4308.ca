import { DocsStructure, getDocsStructure } from "@/utils/docs-structure";
import { ReactNode } from "react";
import SideBarItem from "./sidebar-item";

export default function DocsSidebar({ slug }: { slug?: string[] }) {
  function generateList(
    structure: DocsStructure,
    temp: string = "",
    depth: number = 0
  ): ReactNode[] {
    const res: ReactNode[] = [];
    for (const key in structure) {
      const t = `${temp}/${key}`;
      const children = generateList(structure[key], t, depth + 1);
      res.push(
        <SideBarItem
          key={key}
          title={key}
          hasChildren={children.length > 0}
          clickable={depth > 0}
          path={t}
          defaultOpen={slug !== undefined && slug[depth] === key}
        >
          {children.length > 0 && children}
        </SideBarItem>
      );
    }
    return res;
  }

  return (
    <div className="bg-nav text-background sticky top-20 my-4 flex h-[calc(100vh-24*var(--spacing))] w-80 flex-col overflow-y-scroll rounded-lg p-8 text-lg">
      {slug === undefined
        ? generateList(getDocsStructure())
        : generateList(getDocsStructure(slug[0]), slug[0], 1)}
    </div>
  );
}
