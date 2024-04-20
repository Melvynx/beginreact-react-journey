import { Header } from "@/src/Header";
import { Item } from "@/src/Item";
import { MenuFilters } from "@/src/MenuFilter";

const REACT_CARDS = [
  {
    name: "useState",
    category: "hooks",
    url: "https://react.dev/reference/react/useState",
  },
  {
    name: "useContext",
    category: "hooks",
    url: "https://react.dev/reference/react/useContext",
  },
  {
    name: "JSX",
    category: "components",
    url: "https://react.dev/learn/writing-markup-with-jsx",
  },
  {
    name: "useEffect",
    category: "hooks",
    url: "https://react.dev/reference/react/useEffect",
  },
  {
    name: "useReducer",
    category: "hooks",
    url: "https://react.dev/reference/react/useReducer",
  },
  {
    name: "useRef",
    category: "hooks",
    url: "https://react.dev/reference/react/useRef",
  },
  {
    name: "useMemo",
    category: "hooks",
    url: "https://react.dev/reference/react/useMemo",
  },
  {
    name: "useCallback",
    category: "hooks",
    url: "https://react.dev/reference/react/useCallback",
  },
  {
    name: "Fragment",
    category: "components",
    url: "https://react.dev/reference/react/Fragment",
  },
  {
    name: "Suspense",
    category: "components",
    url: "https://react.dev/reference/react/Suspense",
  },
  {
    name: "useImperativeHandle",
    category: "hooks",
    url: "https://react.dev/reference/react/useImperativeHandle",
  },
  {
    name: "useLayoutEffect",
    category: "hooks",
    url: "https://react.dev/reference/react/useLayoutEffect",
  },
  {
    name: "'use client'",
    category: "server",
    url: "https://react.dev/reference/react/use-client",
  },
  {
    name: "'use server'",
    category: "server",
    url: "https://react.dev/reference/react/use-server",
  },
  {
    name: "useDebugValue",
    category: "hooks",
    url: "https://react.dev/reference/react/useDebugValue",
  },
  {
    name: "Hydration",
    category: "server",
    url: "https://react.dev/reference/react/Hydration",
  },
  {
    name: "Server Components",
    category: "server",
    url: "https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components",
  },
  {
    name: "Server Actions",
    category: "server",
    url: "https://react.dev/reference/react/use-server#server-actions-in-forms",
  },
];

export default function Home({ searchParams }) {
  return (
    <main className="max-w-4xl m-auto h-full px-4 flex flex-col">
      <Header />
      <div className="flex max-lg:flex-col gap-4 mt-8 overflow-auto mb-4 flex-1">
        <MenuFilters currentFilter={searchParams.filter} />
        <div className="h-full w-full overflow-auto">
          <div className="grid grid-cols-1 h-fit md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
            {REACT_CARDS.filter((card) => {
              if (!searchParams.filter) return true;
              return card.category === searchParams.filter;
            }).map((card) => (
              <Item key={card.name} item={card} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
