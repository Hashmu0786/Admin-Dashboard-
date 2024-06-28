import React from "react";
import logo from "../assets/logo.png";
import { FaHouse } from "react-icons/fa6";
import { BsPersonFillCheck } from "react-icons/bs";
import { BiCalendarExclamation } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import { TbReport } from "react-icons/tb";
import { MdOutlineGroups2 } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <>
      <div className="w-50 xl:w-56 2xl:w-64 3xl:w-96  h-screen sticky top-0 left-0 flex flex-col gap-5 3xl:gap-8 bg-[#fffff] text-gray-500 font-[poppins] font-medium text-sm 2xl:text-lg 3xl:text-3xl shadow">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="logo"
            height={50}
            width={50}
            className="m-5 2xl:h-10 2xl:w-20 2xl:m-10 3xl:w-28 3xl:h-16"
          />
        </div>
        <div className="px-2 3xl:px-4">
          <ul className="flex flex-col gap-3 2xl:gap-5 3xl:gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white rounded-lg" : null
              }
            >
              <div className="flex gap-5 items-center px-3 py-2  hover:bg-gray-100 hover:text-black hover:rounded-lg">
                <FaHouse
                  size={20}
                  className="2xl:w-[25px] 2xl:h-[22px] 3xl:w-[40px] 3xl:h-[35px]"
                />
                <li className="3xl:mt-2">Dashboard</li>
              </div>
            </NavLink>
            <NavLink
              to="/attendance"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white rounded-lg" : null
              }
            >
              <div className="flex gap-5 items-center px-3 py-2 hover:bg-gray-100 hover:text-black hover:rounded-lg">
                <BsPersonFillCheck
                  size={20}
                  className="2xl:w-[25px] 2xl:h-[22px] 3xl:w-[40px] 3xl:h-[35px]"
                />
                <li className="3xl:mt-1">Attendence</li>
              </div>
            </NavLink>
            <NavLink
              to="/leave"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white rounded-lg" : null
              }
            >
              <div className="flex gap-5 items-center px-3 py-2 hover:bg-gray-100 hover:text-black hover:rounded-lg">
                <BiCalendarExclamation
                  size={20}
                  className="2xl:w-[25px] 2xl:h-[22px] 3xl:w-[40px] 3xl:h-[35px]"
                />
                <li>Leave</li>
              </div>
            </NavLink>
            <NavLink
              to="/employee"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white rounded-lg" : null
              }
            >
              <div className="flex gap-5 items-center px-3 py-2 hover:bg-gray-100 hover:text-black hover:rounded-lg">
                <MdOutlineGroups2
                  size={20}
                  className="2xl:w-[25px] 2xl:h-[22px] 3xl:w-[40px] 3xl:h-[35px]"
                />
                <li>Employee</li>
              </div>
            </NavLink>
            <NavLink
              to="/document"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white rounded-lg" : null
              }
            >
              <div className="flex gap-5 items-center px-3 py-2 hover:bg-gray-100 hover:text-black hover:rounded-lg">
                <IoDocumentsOutline
                  size={20}
                  className="2xl:w-[25px] 2xl:h-[22px] 3xl:w-[40px] 3xl:h-[35px]"
                />
                <li>Document</li>
              </div>
            </NavLink>
            <NavLink
              to="/report"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white rounded-lg" : null
              }
            >
              <div className="flex gap-5 items-center px-3 py-2 hover:bg-gray-100 hover:text-black hover:rounded-lg">
                <TbReport
                  size={20}
                  className="2xl:w-[25px] 2xl:h-[22px] 3xl:w-[40px] 3xl:h-[35px]"
                />
                <li>Report</li>
              </div>
            </NavLink>
          </ul>
        </div>
        <div className="px-2 mt-14 3xl:px-4 3xl:mt-20">
          <ul className="flex flex-col gap-3">
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white rounded-lg" : null
              }
            >
              <div className="flex gap-5 px-3 py-2 hover:bg-gray-100 hover:text-black hover:rounded-lg">
                <CgProfile
                  size={20}
                  className="2xl:w-[25px] 2xl:h-[22px] 3xl:w-[40px] 3xl:h-[35px]"
                />
                <li>Account</li>
              </div>
            </NavLink>
            <NavLink
              to="/setting"
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white rounded-lg" : null
              }
            >
              <div className="flex gap-5 items-center px-3 py-2 hover:bg-gray-100 hover:text-black hover:rounded-lg">
                <IoMdSettings
                  size={20}
                  className="2xl:w-[25px] 2xl:h-[22px] 3xl:w-[40px] 3xl:h-[35px]"
                />
                <li>Setting</li>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}
