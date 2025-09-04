"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useAppSelector } from "@/store/store";

type Props = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: Props) => {
  const { isSidebarCollapsed, isDarkMode } = useAppSelector(
    (state) => state.global,
  );

  // Access the root element and add the dark class if the isDarkMode is true
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      console.log("classList: " + document.documentElement.classList);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 ${isSidebarCollapsed ? "" : "md:pl-64"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
