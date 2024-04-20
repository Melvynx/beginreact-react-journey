import Link from "next/link";
import { ReactSvg } from "./ReactSvg";

export const Item = ({ item }) => {
  return (
    <Link
      href={item.url}
      className="flex flex-col hover:bg-gray-100 transition-colors hover:border-gray-300 gap-4 p-4 items-center justify-center rounded-lg shadow border"
    >
      <div className="flex items-center gap-2 w-full gap-w">
        <ReactSvg size={32} />
        <p className="font-bold text-md">React</p>
      </div>
      <p className="text-center font-extrabold text-xl">{item.name}</p>
      <p className="text-gray-400 text-sm text-start">{item.category}</p>
    </Link>
  );
};
