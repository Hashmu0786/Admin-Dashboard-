import React from "react";
import { IoCloudDoneSharp } from "react-icons/io5";
import { RiDownloadCloudFill } from "react-icons/ri";
import { FiCopy } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { IoFingerPrintSharp } from "react-icons/io5";
import { IoShare } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

export default function Successful({ setShowSuccModal }) {
  const textToCopy = "hasmuddinasdgagfdsfgsdfghadkjsdhfksdfj";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div
      onClick={() => setShowSuccModal(false)}
      className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center font-[roboto] min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm "
    >
      <div
        className="flex flex-col  items-center shadow-lg bg-white p-5 rounded-lg h-[550px] w-[350px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div
            className="flex justify-end"
            onClick={() => setShowSuccModal(false)}
          >
            <MdCancel size={25} className="text-gray-500" />
          </div>
          <div className="flex flex-col items-center mt-[-20px]">
            <IoCloudDoneSharp size={50} className="text-green-500" />

            <p className="text-xl font-bold text-green-500 mt-2">
              Congratulations
            </p>
            <p className="text-sm font-medium text-green-500 mt-2">
              Employee has been Added
            </p>
            <p className="text-xs font-normal text-green-500">
              Email has been sent to the employee's email address
            </p>
            <p className="text-gray-500 text-xs font-normal text-center">
              share below instructions with the employee to onboard him/her on
              HRMS
            </p>
          </div>
          <hr />
          <div className="flex flex-col mt-2">
            <h2 className="text-gray-900 font-bold text-base text-center">
              Ask Employee to follow below Steps
            </h2>
            <div className="flex flex-col">
              <div className="flex mt-5 gap-5 items-center">
                <div>
                  <RiDownloadCloudFill size={20} className="text-green-900" />
                </div>
                <div>
                  <p className="text-sm font-bold">Step 1 : Download App</p>
                  <p className="text-xs">
                    Ask employee to download HRM app form the play store/App
                    store
                  </p>
                  <div className="flex gap-4 mt-2">
                    <p className="text-xs text-green-500">{textToCopy}</p>
                    <FiCopy onClick={handleCopy} className="cursor-pointer " />
                  </div>
                </div>
              </div>
            </div>
            {/* setp  2 */}
            <div className="flex flex-col">
              <div className="flex mt-5 gap-5 items-center">
                <div>
                  <IoMdPerson size={20} className="text-green-900 mt-[-55px]" />
                </div>
                <div>
                  <p className="text-sm font-bold">Step 2 : Login Credential</p>
                  <p className="text-xs">
                    Ask employee to login with below Credential
                  </p>
                  <div className="flex flex-col text-xs text-gray-900 mt-5 gap-1">
                    <p className="font-medium">Employee ID</p>
                    <p className="font-bold">124</p>
                  </div>
                  <div className="flex flex-col text-xs text-gray-900 mt-3 gap-1">
                    <p className="font-medium">Password</p>
                    <p className="font-bold">12sdf4</p>
                  </div>
                </div>
              </div>
            </div>
            {/* step 3 */}

            <div className="flex mt-4 gap-5">
              <div>
                <IoFingerPrintSharp size={20} className="text-green-900" />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">Step 3 : Punch</p>
                <p className="text-xs">Ask employee punch from the device</p>
              </div>
              <div>
                <IoShare size={30} className="text-green-500 ml-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
