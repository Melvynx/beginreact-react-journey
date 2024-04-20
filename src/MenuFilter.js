import clsx from "clsx";
import Link from "next/link";

export const MenuFilters = ({ currentFilter, filters }) => {
  return (
    <nav className="flex lg:flex-col gap-4 w-full lg:max-w-[200px]">
      <MenuItem currentFilter={currentFilter} filter="">
        All
      </MenuItem>
      {filters.map((filter) => (
        <MenuItem key={filter} currentFilter={currentFilter} filter={filter}>
          {filter}
        </MenuItem>
      ))}
    </nav>
  );
};

const MenuItem = ({ filter, children, currentFilter }) => {
  return (
    <Link
      className={clsx(
        " hover:bg-gray-200 transition-colors px-2 py-1 rounded-md capitalize",
        {
          "font-bold": filter === currentFilter,
        }
      )}
      href={`/?filter=${filter}`}
    >
      {children}
    </Link>
  );
};
