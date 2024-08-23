import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MobileNavbar from "@/components/employerViewComponents/MobileNavbar";
import Topbar from "@/components/employerViewComponents/Topbar";
import Sidebar from "@/components/employerViewComponents/Sidebar";
import MobileSubbar from "@/components/employerViewComponents/MobileSubbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      {children}
      <MobileSubbar />
    </div>
  );
}
