"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { mainNavbarItem } from "@/types/types";
import {
  Calendar,
  CalendarClock,
  CheckCheck,
  Kanban,
  NotebookPen,
  SquareActivity,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const subbarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Overview",
    link: "/dashboard/overview",
    icon: <Kanban />,
  },
  {
    id: 2,
    title: "Calendar",
    link: "/dashboard/calendar",
    icon: <Calendar />,
  },
  {
    id: 3,
    title: "Events",
    link: "/dashboard/events",
    icon: <CalendarClock />,
  },
  {
    id: 4,
    title: "Evaluations",
    link: "/dashboard/evaluations",
    icon: <NotebookPen />,
  },
  {
    id: 5,
    title: "Tasks",
    link: "/dashboard/tasks",
    icon: <CheckCheck />,
  },
  {
    id: 6,
    title: "Activity",
    link: "/dashboard/activity",
    icon: <SquareActivity />,
  },
];

const MobileSubbar = () => {
  const currentRoute = usePathname();
  
  return (
    //   SUBBAR COMPONENT
    <div className="border-t h-12 flex items-center justify-between px-4 lg:hidden sticky bottom-0 bg-background">
      {/* SUBBAR ITEMS */}
      <div className="flex gap-2 place-items-center">
        {subbarItems.map((item) => (
          <Link href={item.link}>
            <Button
              key={item.id}
              variant={"ghost"}
              className={cn("gap-3 justify-start", [
                currentRoute.endsWith(item.link) && "bg-accent",
              ])}
            >
              <span>{item.icon}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileSubbar;
