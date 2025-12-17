import { ReactNode } from "react";

const shared = "px-2 py-1 border-l first:border-l-0 border-gray-500";

export function table({ children }: { children?: ReactNode }) {
  return (
    <div className="border border-gray-500 rounded-lg">
      <table className="w-full table-fixed">
        {children}
      </table>
    </div>
  );
}

export function td({ children }: { children?: ReactNode }) {
  return (
    <td className={`${shared} border-t`}>
      {children}
    </td>
  );
}

export function th({ children }: { children?: ReactNode }) {
  return (
    <th className={shared}>
      {children}
    </th>
  );
}
