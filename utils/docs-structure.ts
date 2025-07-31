import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Structure<T> = {
  [key: string]: Structure<T>;
};
export type DocsStructure = Structure<string>;

export function getDocsStructure(subteam?: string): DocsStructure {
  const filePath = path.join(process.cwd(), "/docs/structure.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = JSON.parse(raw);
  if (subteam === undefined) return parsed;
  else return parsed[subteam];
}

export function readDocsAsMatter(filePath: string) {
  return matter(
    fs.readFileSync(path.join(process.cwd(), "/docs", filePath, "page.md"))
  );
}
