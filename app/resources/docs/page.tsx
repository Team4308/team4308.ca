import CustomMarkdown from "@/components/custom-md/custom-markdown";
import DocsSidebar from "@/components/docs-sidebar/docs-sidebar";
import { readDocsAsMatter } from "@/utils/docs-structure";
import { fontSize } from "@/utils/textStyles";

const text = readDocsAsMatter("").content

export default function Docs() {
  return (
    <div className="flex w-full px-5 flex-row max-sm:flex-col">
      <DocsSidebar />
      <div className="w-full px-5 max-w-6xl mx-auto flex-1 py-10">
        <p className={`font-medium mb-6 ${fontSize.x4l3}`}>4308 Documentation</p>
        <CustomMarkdown dir="/docs/">{text}</CustomMarkdown>
      </div>
    </div>
  );
}
