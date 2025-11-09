import {
  DocsStructure,
  getDocsStructure,
  readDocsAsMatter,
} from "@/utils/docs-structure";
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
      const matter = readDocsAsMatter(t);

      res.push(
        <SideBarItem
          key={key}
          title={matter.data.title}
          hasContent={matter.content.length > 0}
          hrefPath={t}
          onRoute={slug !== undefined && slug[depth] === key}
        >
          {children}
        </SideBarItem>
      );
    }
    return res;
  }

  return (
    <div className="bg-nav text-background sticky top-24 my-4 flex h-[calc(100vh-28*var(--spacing))] w-80 flex-col overflow-y-scroll rounded-lg p-3 text-lg gap-1">
      {slug === undefined
        ? generateList(getDocsStructure())
        : generateList(getDocsStructure(slug[0]), slug[0], 1)}
    </div>
  );
}
