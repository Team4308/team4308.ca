import CustomMarkdown from "@/components/custom-md/custom-markdown";
import DocsSidebar from "@/components/docs-sidebar/docs-sidebar";
import { readDocsAsMatter } from "@/utils/docs-structure";

const text = readDocsAsMatter("").content

export default function Docs() {
  return (
    <div className="flex w-full px-5 flex-row max-sm:flex-col">
      <DocsSidebar />
      <div className="w-full mx-20 max-sm:mx-0 sm:mx-5 md:mx-10 lg:mx-15 max-xl:mx-10 flex-1 py-10">
        <p className="text-5xl font-medium mb-6 max-sm:text-4xl">4308 Documentation</p>
        <CustomMarkdown dir="/docs/">{text}</CustomMarkdown>
      </div>
    </div>
  );
}
