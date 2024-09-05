import "@/app/globals.css";
import MobileSubbar from "@/components/employerViewComponents/MobileSubbar";
import Subbar from "@/components/employerViewComponents/Subbar";
import { mainNavbarItem } from "@/types/types";
import { FolderCheck, List, Bookmark, Archive } from "lucide-react";

const subbarItems: mainNavbarItem[] = [
  {
    id: 1,
    title: "All",
    link: "/jobsz",
    icon: <List />,
  },
  {
    id: 2,
    title: "Subscribed",
    link: "/jobsz",
    icon: <Bookmark />,
  },
  {
    id: 3,
    title: "Active",
    link: "/jobsz",
    icon: <FolderCheck />,
  },
  {
    id: 4,
    title: "Archived",
    link: "/jobsz",
    icon: <Archive />,
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col h-screen w-full lg:hidden">
      <div className="overflow-y-auto h-screen">{children}</div>
        <MobileSubbar subbarItems={subbarItems} />
      </div>

      <div className="hidden lg:flex h-full w-full">
        <Subbar subbarItems={subbarItems} />
        <div className="overflow-y-auto w-full">{children}</div>
      </div>
    </>
  );
}
