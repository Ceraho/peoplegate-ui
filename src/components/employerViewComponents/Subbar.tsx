"use client";

import { Button } from "../ui/button";
import { mainNavbarItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Subbar = ({ subbarItems }: {subbarItems: mainNavbarItem[]}) => {
  const currentRoute = usePathname();

  return (
    <div className="flex flex-col gap-1 border-r h-full min-w-60 pt-2 px-2">
      {subbarItems.map((item) => (
        <Link href={item.link}>
          <Button
            key={item.id}
            variant="ghost"
            className={cn("justify-start w-full", [
              currentRoute.endsWith(item.link) && "bg-accent",
            ])}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.title}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Subbar;
