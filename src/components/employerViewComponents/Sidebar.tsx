"use client";

import {
  Archive,
  BookUser,
  Briefcase,
  ChartNoAxesCombined,
  HomeIcon,
  Mail,
  Notebook,
  Rss,
} from "lucide-react";
import { Button } from "../ui/button";
import { mainNavbarItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "Candidates",
    link: "/candidates",
    icon: <BookUser />,
  },
  {
    id: 3,
    title: "Requisitons",
    link: "/requisitons",
    icon: <Notebook />,
  },
  {
    id: 4,
    title: "Jobs",
    link: "/jobs",
    icon: <Briefcase />,
  },
  {
    id: 5,
    title: "Mailbox",
    link: "/mailbox",
    icon: <Mail />,
  },
  {
    id: 6,
    title: "Analytics",
    link: "/analytics",
    icon: <ChartNoAxesCombined />,
  },
  {
    id: 7,
    title: "Talent pools",
    link: "/talentpools",
    icon: <Archive />,
  },
  {
    id: 8,
    title: "Acquisiton",
    link: "/acquisiton",
    icon: <Rss />,
  },
];

const Sidebar = () => {
  const currentRoute = usePathname();

  return (
    <div className="flex flex-col gap-2 border border-y-0 h-screen min-w-60">
      <div className="text-xl text-primary border-b min-h-14 grid place-items-center">
        PEOPLEGATE
      </div>
      <div className="flex flex-col gap-1 mx-2">
        {sidebarItems.map((item) => (
          <Link href={item.link}>
            <Button
              key={item.id}
              variant="ghost"
              className={cn("justify-start w-full", [
                currentRoute.includes(item.link) && "bg-accent",
              ])}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.title}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
