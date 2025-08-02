import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Structure<T> = {
  [key: string]: Structure<T>;
};
export type DocsStructure = Structure<string>;

let structure: DocsStructure = {};
let read = false;

export function getDocsStructure(subteam?: string): DocsStructure {
  if (!read) {
    const filePath = path.join(process.cwd(), "/docs/structure.json");
    const raw = fs.readFileSync(filePath, "utf8");
    structure = JSON.parse(raw);
    read = true;
  }

  if (subteam === undefined) return structure;
  else return structure[subteam];
}

const stored: {
  [key: string]: matter.GrayMatterFile<matter.Input>;
} = {};

export function readDocsAsMatter(doc: string) {
  const filePath = path.join(process.cwd(), "/docs", doc, "page.md");
  if (filePath in stored) return stored[filePath];

  stored[filePath] = matter(fs.readFileSync(filePath));
  return stored[filePath];
}
