import CustomMarkdown from "@/components/custom-md/custom-markdown";
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
    <div className="mx-auto w-full max-w-4xl my-12">
      <h1 className="text-center text-6xl font-medium">{blog.data.title}</h1>
      <p className="text-date mt-4 mb-10 text-center text-lg">
        {blog.data.date}
      </p>
      <CustomMarkdown dir={`/blog/${slug}`}>{blog.content}</CustomMarkdown>
    </div>
  );
}
