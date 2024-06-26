import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed top-0 z-20 bg-white flex items-center w-full justify-end h-[40px] p-8 2xl:h-[100px] 3xl:h-[120px] border-b border-gray-300">
      <div className="flex gap-6 3xl:gap-10 items-center mr-48 2xl:mr-64 xl:mr-56 3xl:mr-96 relative">
        <div className="relative">
          <IoIosNotifications
            className="text-[#4A96FF] 2xl:h-12 2xl:w-12"
            size={30}
          />
          <div className="h-2 w-2 bg-[#FF5151] rounded-full absolute top-1 left-4 2xl:left-5 2xl:h-4 2xl:w-4"></div>
        </div>
        <FaMoon size={20} className="2xl:h-12 2xl:w-10" />
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
            alt="pic"
            className="rounded-full h-10 w-10 2xl:h-14 2xl:w-14 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute top-full mt-3 flex flex-col gap-2 right-[-50px] text-center 2xl:mt-8 2xl:right-[-80px]">
              <ul className="shadow-lg font-[roboto] rounded-lg ">
                <div className="flex gap-4 px-8 py-2 2xl:py-4 2xl:px-16 hover:bg-gray-100  hover:rounded-lg">
                  <li className="text-sm font-medium 2xl:text-2xl">Account</li>
                  <CgProfile className="h-5 w-5 2xl:h-8 2xl:w-8 text-gray-800" />
                </div>
                <div className="flex gap-4 px-8 py-2 2xl:py-4 2xl:px-16 hover:bg-gray-100  hover:rounded-lg">
                  <li className="text-sm font-medium 2xl:text-2xl ">
                    Sign out
                  </li>
                  <RiLogoutBoxRLine className="h-5 w-5 2xl:h-8 2xl:w-8 text-gray-800" />
                </div>
              </ul>
            </div>
          )}
        </div>
        <p className="text-gray-500 text-base 2xl:text-xl font-medium 3xl:text-3xl">
          Hasmuddin
        </p>
      </div>
    </div>
  );
}
