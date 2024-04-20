import clsx from "clsx";
import Link from "next/link";

export const MenuFilters = ({ currentFilter }) => {
  return (
    <nav className="flex lg:flex-col gap-4">
      <MenuItem currentFilter={currentFilter} filter="">
        All
      </MenuItem>
      <MenuItem currentFilter={currentFilter} filter="hooks">
        Hooks
      </MenuItem>
      <MenuItem currentFilter={currentFilter} filter="components">
        Components
      </MenuItem>
      <MenuItem currentFilter={currentFilter} filter="server">
        Server Components
      </MenuItem>
    </nav>
  );
};

const MenuItem = ({ filter, children, currentFilter }) => {
  return (
    <Link
      className={clsx(
        " hover:bg-gray-200 transition-colors px-2 py-1 rounded-md",
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
