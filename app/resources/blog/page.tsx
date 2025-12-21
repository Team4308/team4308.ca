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
            src={path.join("/res/blog/", slug, blog.data.thumbnail).replace(/\\/g, '/')}
            alt=""
            width={1200}
            height={800}
            className={`aspect-3/2 w-full rounded-lg object-cover ${blog.data.thumbnailClass}`}
            placeholder="empty"
          />
          <p className="mt-2 max-sm:text-xl sm:text-2xl md:text-3xl">{blog.data.title}</p>
          <p className="text-date text-base">{blog.data.date}</p>
        </Link>
      </li>
    );
  });

  return (
    <div className="p-5">
      <h1 className="text-nav mt-12 mb-8 text-center font-medium max-sm:text-5xl md:text-6xl">Blog</h1>
      <ul className="mx-auto max-w-7xl grid grid-cols-2 max-sm:grid-cols-1 gap-6 mb-10">{previews}</ul>
    </div>
  );
}
