import { NavigationMenu } from "radix-ui";

export default function NavBar() {
  return (
    <NavigationMenu.Root className="flex justify-center fixed top-0 w-screen">
      <NavigationMenu.List className="flex flex-row p-4 gap-6">
        <SimpleItem href="/" label="Home"/>
        <SimpleItem href="/about" label="About Us"/>

        <ComplexItem label="Outreach" items={[
          { href: "/fll", label: "FLL" },
          { href: "/tree-planting", label: "Tree Planting" },
        ]}/>
        <ComplexItem label="Resources" items={[
          { href: "/docs", label: "Documentation" },
          { href: "/blogs", label: "Blogs" },
        ]}/>

        <SimpleItem href="/sponsors" label="Sponsors"/>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function SimpleItem({href, label}: {href: string, label: string}) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link href={href}>{label}</NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

function ComplexItem({label, items}: {label: string, items: {href: string, label: string}[]}) {
  return (
    <NavigationMenu.Item className="relative">
      <NavigationMenu.Trigger>{label}</NavigationMenu.Trigger>
      <NavigationMenu.Content className="flex text-center text-nowrap absolute top-[100%] left-[50%] translate-x-[-50%]">
        <ul className="flex flex-col items-center">
          {items.map(({href, label}) => {
            return (
              <NavigationMenu.Link key={label} href={href}>{label}</NavigationMenu.Link>
            );
          })}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}
