import DocsSidebar from "@/components/docs-sidebar";

export default function Docs() {
  return (
    <div className="flex w-full flex-row">
      <DocsSidebar />
      <div className="h-2000 flex-1"></div>
    </div>
  );
}
