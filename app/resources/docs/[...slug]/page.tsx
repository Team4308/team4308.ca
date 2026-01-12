import CustomMarkdown from "@/components/custom-md/custom-markdown";
import DocsSidebar from "@/components/docs-sidebar/docs-sidebar";
import {
  DocsStructure,
  getDocsStructure,
  readDocsAsMatter,
} from "@/utils/docs-structure";

function* generateSlugs(
  docs: DocsStructure,
  temp: string[] = []
): Generator<string[]> {
  for (const key in docs) {
    const t = [...temp, key];
    yield t;
    yield* generateSlugs(docs[key], t);
  }
}

export async function generateStaticParams() {
  const res: { slug: string[] }[] = [];
  for (const slug of generateSlugs(getDocsStructure()))
    if (readDocsAsMatter(slug.join("/")).content.length > 0)
      res.push({ slug: slug });
  return res;
}

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const doc = readDocsAsMatter(slug.join("/"));
  return (
    <div className="flex w-full px-5 flex-row max-sm:flex-col">
      <DocsSidebar slug={slug} />
      <div className="w-full mx-20 max-sm:mx-0 sm:mx-5 md:mx-10 lg:mx-15 max-xl:mx-10 flex-1 py-10">
        <h1 className="text-5xl font-medium mb-6 max-sm:text-4xl">{doc.data.title}</h1>
        <CustomMarkdown dir={`/docs/${slug.join("/")}`}>
          {doc.content}
        </CustomMarkdown>
      </div>
    </div>
  );
}
