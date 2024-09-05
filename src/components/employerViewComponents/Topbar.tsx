"use client";

import {
  Archive,
  Bell,
  BookUser,
  Briefcase,
  ChartNoAxesCombined,
  CircleHelp,
  HomeIcon,
  Mail,
  Notebook,
  Rss,
  Search,
} from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { mainNavbarItem } from "@/types/types";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";

const avatarDropdownMenuItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Profile",
    link: "/",
  },
  {
    id: 2,
    title: "Team",
    link: "/",
  },
  {
    id: 3,
    title: "Settings",
    link: "/",
  },
];

const Topbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex w-full justify-between border-b items-center min-h-14 px-4">
      {/* SEARCH FIELD */}
      <div className="relative w-full md:w-64">
        <Input type="text" placeholder="Search Anything..." className="pl-10" />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
      </div>

      {/* TOPBAR ITEMS */}
      <div className="flex items-center gap-5">
        {/* HELP BUTTON */}
        <span>
          <CircleHelp />
        </span>

        {/* NOTIFICATIONS */}
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Bell className="transition ease-in-out hover:stroke-primary" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit relative top-4 right-20">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex gap-6">
                <Avatar>
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/124599?v=4"
                    alt="@shadcn"
                  />
                  <AvatarFallback delayMs={6000}>SC</AvatarFallback>
                </Avatar>
                <p>
                  <span className="font-bold">Name Surname 7</span> has been
                  moved from <span className="font-bold">Cols 1</span> to{" "}
                  <span className="font-bold"> Cols 2</span>
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex gap-6">
                <Avatar>
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/124599?v=4"
                    alt="@shadcn"
                  />
                  <AvatarFallback delayMs={6000}>SC</AvatarFallback>
                </Avatar>
                <p>
                  <span className="font-bold">Name Surname 10</span> has been
                  moved from <span className="font-bold">Cols 2</span> to{" "}
                  <span className="font-bold"> Cols 4</span>
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* AVATAR */}
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none transition ease-in-out hover:ring-2 ring-primary rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 relative top-4 right-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {avatarDropdownMenuItems.map((item) => (
              <DropdownMenuItem key={item.id}>{item.title}</DropdownMenuItem>
            ))}
            <DropdownMenuLabel className="mt-4">Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={theme === "light"}
              disabled={theme === "light"}
              onCheckedChange={() => {
                setTheme("light");
              }}
            >
              Light Mode
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={theme === "dark"}
              disabled={theme === "dark"}
              onCheckedChange={() => {
                setTheme("dark");
              }}
            >
              Dark Mode
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Topbar;
