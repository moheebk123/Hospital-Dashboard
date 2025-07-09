import { FC, ReactElement } from "react";
import {
  FaTachometerAlt,
  FaUserMd,
  FaCalendarAlt,
  FaFileInvoice,
  FaHospital,
  FaMoneyBillWave,
  FaCog,
  FaUserTie,
} from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

interface SidebarItemType {
  name: string;
  icon: ReactElement;
}

const sidebarItems: SidebarItemType[] = [
  { name: "Dashboard", icon: <FaTachometerAlt className="" /> },
  { name: "Patient", icon: <FaUserMd /> },
  { name: "Appointment", icon: <FaCalendarAlt /> },
  { name: "Doctor", icon: <FaUserMd /> },
  { name: "Billing", icon: <FaFileInvoice /> },
  { name: "Insurance", icon: <FaFileInvoice /> },
  { name: "Master Data", icon: <FaCog /> },
  { name: "Finance", icon: <FaMoneyBillWave /> },
  { name: "Facility Management", icon: <FaHospital /> },
  { name: "Human Resources", icon: <FaUserTie /> },
];

const Sidebar: FC<{
  isSidebarOpen: boolean;
  handleChangeSidebarOpen: () => void;
}> = ({ isSidebarOpen, handleChangeSidebarOpen }) => {
  return (
    <div
      className={`w-92 max-w-screen inset-y-0 h-screen overflow-y-auto bg-white shadow-md py-4 px-2 space-y-4 flex flex-col justify-between z-100 ${
        isSidebarOpen ? "flex" : "hidden"
      } fixed shadow-xl lg:shadow-none lg:sticky top-0 transition`}
    >
      <div>
        <div className="flex justify-end mb-2 lg:hidden">
          <div
            className="p-2 rounded-full hover:bg-gray-100 hover:shadow-lg text-2xl cursor-pointer transition"
            onClick={handleChangeSidebarOpen}
          >
            <RxCross2 />
          </div>
        </div>
        {/* <logo /> */}
        <img
          src="/logo.png"
          alt="AetherPro Healthcare"
          className="h-14 w-auto mx-auto"
        />
        <ul className="mb-2 mt-5">
          {sidebarItems.map((item: SidebarItemType) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-3 text-gray-700 hover:text-primary cursor-pointer mt-1 rounded-xl hover:bg-teal-50 hover:shadow-sm transition p-3"
            >
              <div className="flex items-center gap-3 text-xl font-semibold italic">
                <span className="text-teal-400">{item.icon}</span>
                {item.name}
              </div>
            </li>
          ))}
        </ul>
        <p className="italic text-red-500 cursor-pointer mt-5 text-xl font-semibold hover:underline hover:underline-offset-1 transition">
          Bring all other icon
        </p>
      </div>
      <div>
        <p className="italic cursor-pointer text-xl font-semibold p-2">User</p>
        <div className="flex gap-3 items-center text-xl p-2 text-gray-600 font-semibold hover:bg-gray-100 rounded-xl hover:shadow-sm cursor-pointer">
          <RiAccountCircleLine className="text-black" />
          Account Setting
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
