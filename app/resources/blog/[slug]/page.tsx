import CustomMarkdown from "@/components/custom-markdown";
import { getBlogAsMatter, getBlogs } from "@/utils/blog-cache";

export async function generateStaticParams() {
  return getBlogs().map((blog) => ({
    slug: blog,
  }));
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogAsMatter(slug);
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
