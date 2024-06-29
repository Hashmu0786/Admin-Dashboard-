import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

export default function Details({ setShowDetails }) {
  // const {
  //   data: empData,
  //   isLoading,
  //   error,
  // } = useSelector((state) => state.employee.data);

  const [activeSection, setActiveSection] = useState("personal");

  return (
    <>
      <div
        onClick={() => setShowDetails(false)}
        className=" fixed top-0 left-0 h-screen w-full  z-50 flex justify-center items-center min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm p-4"
      >
        <div
          className="shadow-lg rounded-lg bg-white w-[500px] h-[400px] 2xl:w-[650px] 2xl:h-[550px] 3xl:w-[700px] 3xl:h-[650px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-gray-500 font-[roboto] text-sm 2xl:text-lg 3xl:text-xl font-medium border-b p-4">
            <ul className="flex justify-between cursor-pointer">
              <li
                className={`${
                  activeSection === "personal" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveSection("personal")}
              >
                Personal Details
              </li>
              <li
                className={`${
                  activeSection === "employee" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveSection("employee")}
              >
                Employee Details
              </li>
              <li
                className={`${activeSection === "bank" ? "text-blue-500" : ""}`}
                onClick={() => setActiveSection("bank")}
              >
                Bank Details
              </li>
              <RxCross2
                size={30}
                onClick={() => setShowDetails(false)}
                className="text-gray-800 hover:bg-gray-500 hover:text-white hover:rounded-lg 2xl:h-10 2xl:w-10"
              />
            </ul>
          </div>
          <div className="p-2 2xl:p-4 3xl:p-6 font-[roboto] text-sm 2xl:text-base 3xl:text-lg">
            {activeSection === "personal" && (
              <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5">
                <h2 className="text-lg 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 font-semibold">
                  Personal Details
                </h2>
                <div className="flex gap-2">
                  <p className="font-bold">Full Name :</p>
                  <p className="font-medium">Hasmuddin</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Date Of Birth:</p>
                  <p className="font-medium">25 Aug 2002</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Gender:</p>
                  <p className="font-medium">Male</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Phone no:</p>
                  <p className="font-medium">9289502148</p>
                </div>

                <div className="flex gap-4">
                  <p className="font-bold">Full Address:</p>
                  <p className="font-medium">
                    Sita puri Part 1 south west Delhi 10045
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Blood Group:</p>
                  <p className="font-medium">O+</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Marital Status:</p>
                  <p className="font-medium">Unmarried</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Emergency Contact no:</p>
                  <p className="font-medium">813067933</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Emergency Person Name:</p>
                  <p className="font-medium">Nitin</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">
                    Relationship to Emergency Contact :
                  </p>
                  <p className="font-medium">Brother</p>
                </div>
              </div>
            )}
            {activeSection === "employee" && (
              <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5">
                <h2 className="text-lg 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 font-semibold">
                  Employee Details
                </h2>
                <div className="flex gap-2">
                  <p className="font-bold">Full Name :</p>
                  <p className="font-medium">Hasmuddin</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Employee ID:</p>
                  <p className="font-medium">Q1039</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Date Of Joining:</p>
                  <p className="font-medium">23 May 2024</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Department:</p>
                  <p className="font-medium">IT</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Designation:</p>
                  <p className="font-medium">MERN Stack Developer</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Phone no:</p>
                  <p className="font-medium">9289502148</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Emergency Contact no:</p>
                  <p className="font-medium">813067933</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Blood Group:</p>
                  <p className="font-medium">O+</p>
                </div>
              </div>
            )}
            {activeSection === "bank" && (
              <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5">
                <h2 className="text-lg 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 font-semibold">
                  Bank Details
                </h2>
                <div className="flex gap-2">
                  <p className="font-bold">Account Holder Name :</p>
                  <p className="font-medium">Hasmuddin</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Account Number :</p>
                  <p className="font-medium">1323532465645</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">IFSC Code :</p>
                  <p className="font-medium">SBI2342353</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Bank Name :</p>
                  <p className="font-medium">State Bank of India</p>
                </div>
                <div className="flex gap-4">
                  <p className="font-bold">Branch Name :</p>
                  <p className="font-medium">Janak Puri</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
