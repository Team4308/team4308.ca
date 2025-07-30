import CustomMarkdown from "@/components/custom-markdown";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "/blog"));
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = matter(
    fs.readFileSync(path.join(process.cwd(), "/blog", slug + ".md"))
  );
  return (
    <div className="mx-auto w-full max-w-4xl">
      <p className="text-center text-5xl font-medium">{blog.data.title}</p>
      <p className="text-date mt-4 mb-16 text-center text-lg">
        {blog.data.date}
      </p>
      <CustomMarkdown dir={`/blog/${slug}`}>{blog.content}</CustomMarkdown>
    </div>
  );
}
