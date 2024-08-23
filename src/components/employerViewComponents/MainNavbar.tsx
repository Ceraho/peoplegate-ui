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
  MenuIcon,
  Notebook,
  Rss,
  Settings,
} from "lucide-react";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
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

const sidebarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "Candidates",
    link: "/",
    icon: <BookUser />,
  },
  {
    id: 3,
    title: "Requisitons",
    link: "/",
    icon: <Notebook />,
  },
  {
    id: 4,
    title: "Jobs",
    link: "/",
    icon: <Briefcase />,
  },
  {
    id: 5,
    title: "Mailbox",
    link: "/",
    icon: <Mail />,
  },
  {
    id: 6,
    title: "Analytics",
    link: "/",
    icon: <ChartNoAxesCombined />,
  },
  {
    id: 7,
    title: "Talent pools",
    link: "/",
    icon: <Archive />,
  },
  {
    id: 8,
    title: "Acquisiton",
    link: "/",
    icon: <Rss />,
  },
];

const topbarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "Notifications",
    link: "/",
    icon: <Bell />,
  },
  {
    id: 2,
    title: "Help",
    link: "/",
    icon: <CircleHelp />,
  },
];

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

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 border border-y-0 h-screen w-48">
      <div className="text-xl text-primary border-b h-14 grid place-items-center">
        PEOPLEGATE
      </div>
      {sidebarItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className="justify-start w-fit ml-1"
        >
          <span className="mr-3">{item.icon}</span>
          <span>{item.title}</span>
        </Button>
      ))}
    </div>
  );
};

const Topbar = () => {
  const { setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? "light" : "dark");
  };

  return (
    <div className="flex w-full justify-between border-b h-14 items-center px-6">
      <div className="w-full grid place-items-center">
        <Input placeholder="Search ..." className="w-1/4"></Input>
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
              checked={!darkMode}
              disabled={!darkMode}
              onCheckedChange={toggleDarkMode}
            >
              Light Mode
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={darkMode}
              disabled={darkMode}
              onCheckedChange={toggleDarkMode}
            >
              Dark Mode
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div className="hidden lg:flex">
      <Sidebar />
      <Topbar />
    </div>
  );
};



const MainNavbar = () => {
  return (
    <>
      <DesktopNavbar />
    </>
  );
};

export default MainNavbar;
