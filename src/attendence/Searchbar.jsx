import React, { useRef, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import dateFormat from "dateformat";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import {
  AttendanceTodayData,
  clearAttendaceData,
} from "../reduxToolkit/attendanceSlice";

export default function Searchbar() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const datePickerRef = useRef(null);
  const dispatch = useDispatch();

  const handleIconClick = () => {
    datePickerRef.current.setFocus();
  };

  const handledate = async (event) => {
    console.log("my date", event.target.value);
    // await dispatch(clearAttendaceData());
    await dispatch(AttendanceTodayData(event.target.value)).unwrap();

    // const dateStr = dateFormat(date, "dd/mm/yyyy");
    // const [day, month, year] = dateStr.split("/");
    // const formattedDate = `${year}-${month}-${day}`;
    // setSelectedDate(formattedDate);
    // console.log("formate date", formattedDate);
  };

  return (
    <>
      <div className=" mt-20 ml-6 2xl:mt-32 3xl:mt-36 flex  font-[roboto]">
        <div className="flex gap-4">
          <div className="flex text-sm h-[30px] w-[250px] xl:w-[250px] 2xl:h-[50px] 2xl:w-[400px] 2xl:text-base 3xl:w-[400px] 3xl:h-[50px] border-[1px] border-gray-500 rounded-lg">
            <span className="flex items-center justify-center text-gray-500 px-3">
              <CiSearch size={20} className="2xl:h-10 2xl:w-8" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm 2xl:text-base 3xl:text-xl text-gray-500 px-2 py-1 flex-grow outline-none focus:border-black 2xl:px-4 2xl:py-2"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 2xl:gap-4 border-[1px] border-gray-500 rounded-lg px-1 py-[2px] 3xl:px-5 3xl:py-3 2xl:px-4 2xl:py-2">
              <span onClick={handleIconClick} className="cursor-pointer">
                <FaCalendarAlt size={15} className="ml-0 2xl:h-8 2xl:w-8" />
              </span>
              {/* <DatePicker
                ref={datePickerRef}
                selected={selectedDate}
                onChange={(date) => handledate(date)}
                className="text-gray-800 text-xs 2xl:text-[22px] 3xl:text-2xl outline-none 2xl:h-8"
                placeholderText="Select date"
                dateFormat="dd/MM/yyyy"
                popperPlacement="bottom-end"
              /> */}
              <input
                type="date"
                onChange={handledate}
                placeholder="dd/mm/yy"
                className="text-gray-800 text-xs 2xl:text-[22px] 3xl:text-2xl outline-none 2xl:h-8"
              />
            </div>
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            <IoFilterSharp
              size={20}
              className="2xl:h-10 2xl:w-10 3xl:h-14 3xl:w-14"
            />
            <p className="text-gray-800 font-medium text-sm 2xl:text-base 3xl:text-xl">
              Show filters
            </p>
          </div>
        </div>
      </div>

      {showFilter && (
        <div className="flex items-center gap-4 font-[roboto] mt-3 ml-6  2xl:ml-4 2xl:m-6">
          {/* Department select */}
          <div className="flex items-center gap-1 border-[1px] border-gray-500 px-2 py-1 3xl:px-5 3xl:py-3 2xl:px-4 2xl:py-2 rounded-lg text-xs">
            <span className="text-gray-800 font-medium 2xl:text-xl 3xl:text-2xl">
              Department:
            </span>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="outline-none focus:border-black px-2 py-1 2xl:text-xl 3xl:text-2xl"
            >
              <option value="All">All</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Graphic designer">Graphic designer</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          {/* Date picker
          <div className="relative">
            <div className="flex items-center gap-2 2xl:gap-4 border-[1px] border-gray-500 rounded-lg px-2 py-1 3xl:px-5 3xl:py-3 2xl:px-4 2xl:py-2">
              <span onClick={handleIconClick} className="cursor-pointer">
                <FaCalendarAlt size={20} className="ml-0 2xl:h-8 2xl:w-8" />
              </span>
              <DatePicker
                ref={datePickerRef}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="text-gray-800 text-sm 2xl:text-[22px] 3xl:text-2xl outline-none 2xl:h-8"
                placeholderText="Select date"
                dateFormat="dd/MM/yyyy"
                popperPlacement="bottom-end"
              />
            </div>
          </div> */}

          {/* Status select */}
          <div className="flex items-center border-[1px] border-gray-500 px-2 py-1 rounded-lg text-xs 3xl:px-5 3xl:py-3 2xl:px-4 2xl:py-2">
            <span className="text-gray-800 font-medium 2xl:text-xl 3xl:text-2xl">
              Status:
            </span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="outline-none focus:border-black px-2 py-1 2xl:text-xl 3xl:text-2xl"
            >
              <option value="All">All</option>
              <option value="Log in">Log in</option>
              <option value="Log out">Log out</option>
              <option value="Leave">Leave</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}
