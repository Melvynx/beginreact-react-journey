import { Header } from "@/src/Header";
import { Item } from "@/src/Item";
import { MenuFilters } from "@/src/MenuFilter";
import { REACT_CARDS } from "@/src/const";

export default function Home({ searchParams }) {
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];

  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <MenuFilters filters={filters} currentFilter={searchParams.filter} />
        <div className="size-full overflow-auto">
          <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REACT_CARDS.filter((card) => {
              if (!searchParams.filter) return true;
              return card.category === searchParams.filter;
            }).map((card) => (
              <Item
                hideCategory={Boolean(searchParams.filter)}
                key={card.name}
                item={card}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
