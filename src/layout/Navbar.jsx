import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { clearAuthentication } from "../reduxToolkit/loginSlice";
import { NavLink, useNavigate } from "react-router-dom";
import bgimage from "./images/nav-img.png";
import logo from "./images/hr logo.png";
import { FaExchangeAlt } from "react-icons/fa";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      dispatch(clearAuthentication());
      navigate("/signin");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div
      className="fixed top-[-5px] left-[155px] xl:left-[220px] z-20  flex items-center w-full justify-between h-[50px] p-6 px-12 2xl:h-[80px] 3xl:h-[5  0px] border-b border-gray-300"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <p className="text-lg font-medium text-[roboto] text-white">
        Welcome Qurilo
      </p>
      <div className="flex gap-6 3xl:gap-10 items-center mr-48 2xl:mr-64 xl:mr-56 3xl:mr-96 relative">
        <div className="relative">
          <IoIosNotifications
            className="text-[#4A96FF] 2xl:h-12 2xl:w-12"
            size={24}
          />
          <div className="h-2 w-2 bg-[#FF5151] rounded-full absolute top-1 left-4 2xl:left-5 2xl:h-4 2xl:w-4"></div>
        </div>
        <FaMoon size={15} className="2xl:h-12 2xl:w-10" />
        <div className="relative">
          <img
            src={logo}
            alt="pic"
            className="rounded-full h-8 w-8 2xl:h-14 2xl:w-14 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute top-full mt-3 flex flex-col gap-2 fixed  right-[-10px] text-center 2xl:mt-8 2xl:right-[-80px]">
              <ul className="shadow-lg font-[roboto] rounded-lg ">
                <div className="flex gap-4 justify-start px-8 py-2 2xl:py-4 2xl:px-16 hover:bg-gray-100  hover:rounded-lg">
                  <CgProfile className="h-5 w-5 2xl:h-8 2xl:w-8 text-gray-800" />
                  <li className="text-sm font-medium 2xl:text-2xl">Account</li>
                </div>
                <NavLink to="/changePassword">
                  <div className="flex gap-4 px-8 py-2 2xl:py-4 2xl:px-16 hover:bg-gray-100  hover:rounded-lg">
                    <FaExchangeAlt className="h-5 w-5 2xl:h-8 2xl:w-8 text-gray-800" />
                    <li className="text-sm font-medium 2xl:text-2xl ">
                      Change Passowrd
                    </li>
                  </div>
                </NavLink>
                <div
                  className="flex gap-4 px-8 py-2 2xl:py-4 2xl:px-16 hover:bg-gray-100  hover:rounded-lg"
                  onClick={handleLogout}
                >
                  <RiLogoutBoxRLine className="h-5 w-5 2xl:h-8 2xl:w-8 text-gray-800" />
                  <li className="text-sm font-medium 2xl:text-2xl ">Log out</li>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
