import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";

export default function Blog() {
  const files = fs.readdirSync(path.join(process.cwd(), "/blog"));
  const blogs = files.map((file) => {
    return {
      blog: matter(fs.readFileSync(path.join(process.cwd(), "/blog", file))),
      slug: file.replace(".md", ""),
    };
  });
  blogs.sort((obj1, obj2) => {
    return Date.parse(obj2.blog.data.date) - Date.parse(obj1.blog.data.date);
  });

  const previews = blogs.map(({ blog, slug }) => {
    return (
      <li key={slug}>
        <Link href={`/resources/blog/${slug}`}>
          <Image
            src={path.join("/images/blog/", slug, blog.data.thumbnail)}
            alt=""
            width={900}
            height={600}
            className="aspect-3/2 w-full rounded-lg object-cover"
            placeholder="empty"
          />
          <p className="mt-2 text-3xl">{blog.data.title}</p>
          <p className="text-date text-base">{blog.data.date}</p>
        </Link>
      </li>
    );
  });

  return (
    <>
      <h1 className="text-nav mb-16 text-6xl font-medium">Blog</h1>
      <ul className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">{previews}</ul>
    </>
  );
}
