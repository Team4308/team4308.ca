import CustomMarkdown from "@/components/custom-markdown";
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
  const structure = getDocsStructure();
  for (const key in structure)
    for (const slug of generateSlugs(structure[key], [key]))
      res.push({ slug: slug });
  return res;
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const doc = readDocsAsMatter(slug.join("/"));
  return (
    <div className="flex w-full flex-row">
      <DocsSidebar slug={slug} />
      <div className="ml-12 flex-1 py-10">
        <p className="text-5xl font-medium">{doc.data.title}</p>
        <CustomMarkdown dir={`/docs/${slug.join("/")}`}>
          {doc.content}
        </CustomMarkdown>
      </div>
    </div>
  );
}
