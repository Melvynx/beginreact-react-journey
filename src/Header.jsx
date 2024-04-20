import { ShoppingBasket, User } from "lucide-react";
import { ReactSvg } from "./ReactSvg";
import { Button } from "./button";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        <ReactSvg size={32} />
        <span>ReactJourney</span>
      </h1>
      <div className="ml-auto flex items-center gap-4">
        <Button variant={"ghost"}>
          <ShoppingBasket size={20} />
        </Button>
        <Button variant={"ghost"}>
          <User size={20} />
        </Button>
      </div>
    </header>
  );
};
