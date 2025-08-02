import fs from "fs";
import matter from "gray-matter";
import path from "path";

let blogs: string[] = [];
let read = false;

export function getBlogs() {
  if (!read) {
    blogs = fs
      .readdirSync(path.join(process.cwd(), "/blog"))
      .map((file) => file.replace(".md", ""));
    read = true;
  }

  return blogs;
}

const stored: {
  [key: string]: matter.GrayMatterFile<matter.Input>;
} = {};

export function getBlogAsMatter(blog: string) {
  if (blog in stored) return stored[blog];

  const filePath = path.join(process.cwd(), "/blog", `${blog}.md`);
  stored[blog] = matter(fs.readFileSync(filePath));
  return stored[blog];
}
