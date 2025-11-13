import CustomMarkdown from "@/components/custom-md/custom-markdown";
import DocsSidebar from "@/components/docs-sidebar";
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
    <div className="flex w-full px-10 flex-row">
      <DocsSidebar slug={slug} />
      <div className="ml-auto max-w-7xl flex-1 py-10">
        <p className="text-5xl font-medium mb-6">{doc.data.title}</p>
        <CustomMarkdown dir={`/docs/${slug.join("/")}`}>
          {doc.content}
        </CustomMarkdown>
      </div>
    </div>
  );
}
