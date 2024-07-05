import React from "react";
import { MdOutlineCancel } from "react-icons/md";

export default function SelectStatus({ setShowStatus }) {
  return (
    <div
      onClick={() => setShowStatus(false)}
      className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-start  font-[roboto] min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm "
    >
      <div
        className="flex flex-col gap-5 shadow-lg bg-white p-14 rounded-lg mt-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h1 className="text-xl font-medium text-fray-900 mt-[-20px] mb-5">
            Edit Attendace
          </h1>
          <MdOutlineCancel
            size={30}
            className="text-gray-400 mt-[-30px] hover:text-red-400"
            onClick={() => setShowStatus(false)}
          />
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-sm font-medium font-[poppins]">
            Attendace Status
          </h2>

          <div className="flex gap-5">
            <button className="bg-transparent text-xs py-1 px-4 hover:bg-green-500 text-green-700 font-normal hover:text-white border border-green-500 hover:border-transparent rounded-xl">
              PRESENT
            </button>
            <button className="bg-transparent text-xs py-1 px-4 hover:bg-rose-500 text-rose-700 font-normal hover:text-white border border-rose-500 hover:border-transparent rounded-xl">
              ABSENT
            </button>
            <button className="bg-transparent text-xs py-1 px-4 hover:bg-amber-500 text-amber-700 font-normal hover:text-white border border-amber-500 hover:border-transparent rounded-xl">
              HALF DAY
            </button>
            <button className="bg-transparent text-xs py-1 px-4 hover:bg-blue-500 text-blue-700 font-normal hover:text-white border border-blue-500 hover:border-transparent rounded-xl">
              WEEK OFF
            </button>
            <button className="bg-transparent text-xs py-1 px-4 hover:bg-purple-500 text-purple-700 font-normal hover:text-white border border-purple-500 hover:border-transparent rounded-xl">
              HOLIDAY
            </button>
          </div>
        </div>
        <hr />
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-sm font-medium font-[poppins]">
            Approval Status
          </h2>
          <div className="flex gap-5">
            <button className="bg-transparent text-xs py-1 px-4 hover:bg-amber-500 text-amber-700 font-normal hover:text-white border border-amber-500 hover:border-transparent rounded-xl">
              PENDING
            </button>
            <button className="bg-transparent text-xs py-1 px-4 hover:bg-blue-500 text-blue-700 font-normal hover:text-white border border-blue-500 hover:border-transparent rounded-xl">
              APPROVED
            </button>
            <button className="bg-transparent text-xs py-1 px-4 hover:bg-rose-500 text-rose-700 font-normal hover:text-white border border-rose-500 hover:border-transparent rounded-xl">
              REJECTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
