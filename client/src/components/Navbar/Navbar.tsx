import React from "react";
import { MenuIcon, Moon, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/store/slice";

const Navbar = () => {
  const { isSidebarCollapsed, isDarkMode } = useAppSelector(
    (state) => state.global,
  );
  const dispatch = useAppDispatch();

  return (
    <div className="dark:-py-3 flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        {/* Sidebar Toggle Button */}
        {!isSidebarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <MenuIcon className="h-8 w-8 cursor-pointer dark:text-white" />
          </button>
        )}

        {/* Search Bar */}
        <div className="relative flex h-min w-[200]">
          <Search className="absolute top-1/2 left-[4px] mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="boarder-none focus:boarder-transparent dark: w-full rounded bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Settings Icons */}
      <div className="flex items-center">
        {/* Dark Mode Toggle Icon */}
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={`rounded p-2 ${isDarkMode ? "dark:hover:bg-gray-700" : "hover:bg-gray-100"}`}
        >
          {isDarkMode ? (
            <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
          ) : (
            <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
          )}
        </button>
        <Link
          href="/settings"
          className="h-min w-min rounded p-2 hover:bg-gray-100"
        >
          <Settings
            className={`h-min w-min rounded p-2 ${isDarkMode ? "dark:hover:bg-gray-700" : "bg-hover-gray-100"}`}
          />
        </Link>
        <div className="mr-5 ml-2 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
