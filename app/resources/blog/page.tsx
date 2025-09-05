import { getBlogAsMatter, getBlogs } from "@/utils/blog-cache";
import Image from "next/image";
import Link from "next/link";
import path from "path";

export default function Blog() {
  const blogs = getBlogs().map((blog) => {
    const matter = getBlogAsMatter(blog);
    return {
      blog: matter,
      slug: blog,
      date: Date.parse(matter.data.date),
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
      <h1 className="text-nav mt-12 mb-8 text-6xl font-medium">Blog</h1>
      <ul className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">{previews}</ul>
    </>
  );
}
