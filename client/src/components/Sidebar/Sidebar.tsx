"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Home, LockIcon } from "lucide-react";
import SidebarLink from "./SidebarLink/SidebarLink";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  return (
    <div className="dark:bg-dark-black fixed z-40 flex h-full w-64 flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300">
      <div className="flex h-full w-full flex-col justify-start dark:bg-black">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            Flowboard
          </div>
        </div>
        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              Flowboard Team
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Private
              </p>
            </div>
          </div>
        </div>
        {/* NAVBAR LINKS */}
        <nav className="z-10 w-full">
          <SidebarLink href="/" icon={Home} label="Home" />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
