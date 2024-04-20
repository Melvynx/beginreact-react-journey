import { BookOpenText, PlusCircle } from "lucide-react";
import Link from "next/link";
import { ReactSvg } from "./ReactSvg";
import { Button, buttonVariants } from "./button";

export const Item = ({ item }) => {
  return (
    <div className="flex flex-col hover:bg-gray-100 transition-colors hover:border-gray-300 gap-4 p-4 items-center justify-center rounded-lg shadow border">
      <div className="flex items-center gap-2 w-full gap-w">
        <ReactSvg size={32} />
        <p className="font-bold text-md">React</p>
      </div>
      <p className="text-center w-full line-clamp-1 font-extrabold text-lg overflow-hidden text-ellipsis">
        {item.name}
      </p>
      <p className="text-gray-400 text-sm text-start">{item.category}</p>
      <div className="w-full flex gap-2 items-center justify-end">
        <Link
          href={item.url}
          className={buttonVariants({ variant: "secondary" })}
        >
          <BookOpenText size={16} />
        </Link>
        <Button variant="secondary">
          <PlusCircle size={16} />
        </Button>
      </div>
    </div>
  );
};
