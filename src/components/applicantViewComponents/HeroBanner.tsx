import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="flex flex-col p-4 pt-12 bg-gradient-to-tr from-secondary to-primary lg:h-[45dvh] lg:items-center lg:justify-center">
      <div className="grid place-items-center gap-6">
        <h1 className="text-4xl font-semibold text-center lg:text-5xl">
          Find your next career opportunity
        </h1>
        <p className="text-xl text-center">
          Explore our open positions and join our growing team.
        </p>
        <div className="w-full h-fit relative">
          <Input placeholder="Search" className="w-full h-fit" />
          <button className="right-3 top-0 h-full absolute">
            <SearchIcon className="stroke-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
