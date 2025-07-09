"use client";

import { useState } from "react";
import { FC } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";

const navbarLinks: string[] = [
  "Request Services",
  "Services",
  "Tickets",
  "Calendar",
];

const Navbar: FC<{
  handleChangeSidebarOpen: () => void;
}> = ({ handleChangeSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChangeMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full bg-white px-6 py-3 shadow flex justify-between items-center">
      <div className="text-md text-gray-500 flex gap-6 items-center">
        <div
          className="p-2 rounded-full hover:bg-gray-100 hover:shadow-lg cursor-pointer transition -mr-2"
          onClick={handleChangeSidebarOpen}
        >
          <FaBars className="text-lg" />
        </div>
        {navbarLinks.map((link: string, index: number) => (
          <div
            key={link}
            className={`${
              index < 2 ? "md:flex md:gap-2 md:items-center" : "md:block"
            } font-semibold cursor-pointer hover:underline hover:text-black hidden`}
          >
            <span>{link}</span> {index < 2 ? <FaAngleDown /> : <></>}
          </div>
        ))}
      </div>
      <div className="flex gap-5 items-center relative">
        <span
          className={`font-semibold flex gap-2 items-center text-lg md:hidden cursor-pointer py-1 px-4 rounded-full transition hover:bg-gray-100 ${isMenuOpen ? "bg-gray-200" : ""}`}
          onClick={handleChangeMenuOpen}
        >
          Explore <FaAngleDown />
        </span>
        {isMenuOpen ? (
          <div className="bg-white rounded-xl shadow-lg absolute z-40 top-[55px] -left-1/2 py-2 md:hidden">
            {navbarLinks.map((link: string, index: number) => (
              <div
                key={link}
                className={`${
                  index < 2 ? "flex gap-2 items-center" : ""
                } font-semibold cursor-pointer text-lg hover:bg-gray-100 hover:text-black py-3 px-5 min-w-fit transition`}
              >
                <span>{link}</span>
                {index < 2 ? <FaAngleDown /> : <></>}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
        <div className="p-2 rounded-full hover:bg-gray-100 hover:shadow-lg cursor-pointer transition">
          <MdOutlineNotificationsActive className="text-2xl" />
        </div>
        <div className="rounded-full w-8 h-8 bg-gray-300 cursor-pointer hover:shadow-lg"></div>
      </div>
    </div>
  );
};

export default Navbar;
