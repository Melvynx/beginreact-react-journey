import { ShoppingBasket, User } from "lucide-react";
import { Button } from "./button";

export const Header = () => {
  return (
    <header className="py-4 flex items-center w-full">
      <h1 className="text-lg font-bold">ReactJourney</h1>
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
