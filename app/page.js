import { Header } from "@/src/Header";
import { Item } from "@/src/Item";
import { MenuFilters } from "@/src/MenuFilter";
import { REACT_CARDS } from "@/src/const";

export default function Home({ searchParams }) {
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];

  return (
    <main className="max-w-4xl m-auto h-full px-4 flex flex-col">
      <Header />
      <div className="flex max-lg:flex-col gap-4 mt-8 overflow-auto mb-4 flex-1">
        <MenuFilters filters={filters} currentFilter={searchParams.filter} />
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
