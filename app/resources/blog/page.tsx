import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const files = fs.readdirSync(process.cwd() + "/blog/");
  const blogs = files.map((file) => {
    const slug = file.replace(".md", "");
    const blog = matter(fs.readFileSync(process.cwd() + "/blog/" + file));
    return (
      <li key={slug}>
        <Link href={`/resources/blog/${slug}`}>
          <Image
            src={`/images/blog/${slug}/${blog.data.thumbnail}`}
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
      <ul className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">{blogs}</ul>
    </>
  );
}
