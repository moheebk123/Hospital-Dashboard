"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { GoDotFill } from "react-icons/go";

const Layout: React.FC<{ children: React.ReactNode; page: string }> = ({
  children,
  page,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChangeSidebarOpen = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleChangeSidebarOpen={handleChangeSidebarOpen}
      />
      <div className="grow bg-gray-50">
        <Navbar
          handleChangeSidebarOpen={handleChangeSidebarOpen}
        />
        <main>
          <header className="bg-[url(/banner.jpeg)] bg-cover bg-no-repeat bg-bottom w-full h-40">
            <div className="p-5 flex justify-between items-center h-full">
              <div>
                <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
                <div className="flex gap-3 items-center font-semibold italic text-gray-100 text-lg mt-2">
                  {page} <GoDotFill className="mt-1" /> Dashboard
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg hover:bg-gray-100 cursor-pointer transition">
                <img
                  src="/logo.png"
                  alt="AetherPro Healthcare"
                  className="h-20"
                />
              </div>
            </div>
          </header>
          <div className="p-5 mt-5">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
