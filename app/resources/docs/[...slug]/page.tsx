import CustomMarkdown from "@/components/custom-md/custom-markdown";
import DocsSidebar from "@/components/docs-sidebar/docs-sidebar";
import {
  DocsStructure,
  getDocsStructure,
  readDocsAsMatter,
} from "@/utils/docs-structure";
import { fontSize } from "@/utils/textStyles";

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
      <div className="w-full px-5 max-w-6xl mx-auto flex-1 py-10">
        <h1 className={`font-medium mb-6 ${fontSize.x4l3}`}>{doc.data.title}</h1>
        <CustomMarkdown dir={`/docs/${slug.join("/")}`}>
          {doc.content}
        </CustomMarkdown>
      </div>
    </div>
  );
}
