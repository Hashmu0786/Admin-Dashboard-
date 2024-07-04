import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { WorkTiming } from "../reduxToolkit/attendanceSlice";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdPersonalInjury } from "react-icons/md";
import { LuBoxSelect } from "react-icons/lu";
import { CiBank } from "react-icons/ci";
import "../App.css";
import {
  DepartmentList,
  fetchDataEmployee,
  newEmployee,
} from "../reduxToolkit/empSlice";
import Successful from "./Successful";

export default function AddEmployee({ setShowAddEmployee, setShowSuccModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WorkTiming());
    dispatch(DepartmentList());
  }, [dispatch]);

  const handleWorkTimeChange = (event) => {
    const selectedWorkTimeId = event.target.value;
    console.log("Selected Work Time ID:", selectedWorkTimeId);
  };

  const workTimedata = useSelector((state) => state.attendance.workTime);
  const depList = useSelector((state) => state.employee.depList);

  const handleDepartment = (e) => {
    const depID = e.target.value;
    console.log("Department name Id", depID);
  };

  const newData = useSelector((state) => state.employee.newData);

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    setShowAddEmployee(false);
    await dispatch(newEmployee(data)).unwrap();
    await dispatch(fetchDataEmployee());
    console.log("new employee response", newData);
    if (newData.status == "success") {
      setShowSuccModal(true);
    } else {
      setShowSuccModal(false);
    }
  };

  const handleCancel = () => {
    setShowAddEmployee(false);
  };

  return (
    <>
      <div
        onClick={handleCancel}
        className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm p-4"
      >
        <div
          className=" shadow-lg rounded-lg bg-white w-[450px] h-[500px] 2xl:w-[550px] 2xl:h-[650px]  2xl:w-[750px] 3xl:h-[650px] "
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center text-blue-900 font-[roboto] text-xl font-bold text-center 2xl:text-3xl 3xl:text-3xl font-medium border-b p-4">
            <p> Add Employee</p>
            <div
              className="hover:bg-gray-400 p-1 rounded-lg hover:text-gray-900"
              onClick={() => setShowAddEmployee(false)}
            >
              <RxCross2 />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-3 ml-5 mb-5">
            <div className="h-[380px] 2xl:h-[500px] overflow-y-auto border-b-2">
              <h4 className="text-start text-lg font-[roboto] font-medium text-gray-900 2xl:text-2xl">
                Basic Details
              </h4>
              <div className=" text-xs flex flex-col gap-5 text-gray-500 font-[roboto] mt-4 mb-5 2xl:text-lg">
                <div className="flex flex-col mr-5">
                  <div className="flex gap-2">
                    <MdOutlinePersonOutline
                      size={18}
                      className="2xl:h-6 2xl:w-6"
                    />
                    <label className="ml-1 font-medium text-sm 2xl:text-lg">
                      Employee name
                    </label>
                  </div>
                  <input
                    type="text"
                    className="border-b-2 border-gray-400 mt-3 ml-6 focus:outline-none focus:border-gray-900"
                    {...register("name", {
                      required: "Employee name is required",
                    })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col mr-5">
                  <div className="flex gap-2 items-center">
                    <FaPhoneAlt size={13} className="2xl:h-4 2xl:w-4" />
                    <label className="ml-1 font-medium text-sm 2xl:text-lg">
                      Phone no
                    </label>
                  </div>
                  <input
                    type="text"
                    className="border-b-2 border-gray-400 mt-3 ml-6 focus:outline-none focus:border-gray-900"
                    {...register("mobileNumber", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.mobileNumber && (
                    <span className="text-red-500 text-xs">
                      {errors.mobileNumber.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col mr-5">
                  <div className="flex gap-2 items-center">
                    <MdOutlineEmail size={18} className="2xl:h-6 2xl:w-6" />
                    <label className="ml-1 font-medium text-sm 2xl:text-lg">
                      Email Address
                    </label>
                  </div>
                  <input
                    type="email"
                    className="border-b-2 border-gray-400 mt-3 ml-6 focus:outline-none focus:border-gray-900"
                    {...register("email", {
                      required: "Email address is required",
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col mr-5">
                  <div className="flex gap-2 items-center">
                    <IoTimeOutline size={18} className="2xl:h-6 2xl:w-6" />
                    <label className="ml-1 font-medium text-sm 2xl:text-lg">
                      Work Timings
                    </label>
                  </div>
                  <select
                    {...register("workTimings")}
                    className="border-b-2 border-gray-400 mt-3 ml-6 focus:outline-none focus:border-gray-900"
                    onChange={handleWorkTimeChange}
                  >
                    {workTimedata?.data?.map((workTime) => (
                      <option key={workTime._id} value={workTime._id}>
                        {`${workTime.shiftStartTime} to ${workTime.shiftEndTime}`}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-8 ml-2 2xl:text-lg">
                  <h4 className="text-start text-lg font-[roboto] font-medium text-gray-900 2xl:text-2xl">
                    Other Details
                  </h4>
                  <div className="text-xs flex flex-col gap-5 text-gray-500 font-[roboto] mt-4">
                    <div className="flex flex-col mr-5">
                      <div className="flex gap-2 items-center">
                        <IoTimeOutline size={18} className="2xl:h-6 2xl:w-6 " />
                        <label className="ml-1 font-medium text-sm 2xl:text-lg">
                          Department
                        </label>
                      </div>
                      <select
                        {...register("department", {
                          required: "Department is required to select",
                        })}
                        className="border-b-2 border-gray-400 mt-3 ml-6 focus:outline-none focus:border-gray-900 2xl:text-lg"
                        onChange={handleDepartment}
                      >
                        {depList?.data?.map((dep) => (
                          <option key={dep?._id} value={dep?._id}>
                            {dep?.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col mr-5">
                      <div className="flex gap-2 items-center">
                        <SlCalender size={18} className="2xl:h-4 2xl:w-4" />
                        <label className="ml-1 font-medium text-sm 2xl:text-lg ">
                          Date of joining
                        </label>
                      </div>
                      <input
                        type="date"
                        className="border-b-2 border-gray-400 mt-3 ml-6 focus:outline-none focus:border-gray-900 2xl:text-lg"
                        placeholder="yyyy-mm-dd"
                        {...register("dateOfJoining", {
                          required: "Please select the date of joining",
                        })}
                      />
                      {errors.dateOfJoining && (
                        <span className="text-red-500 text-xs">
                          {errors.dateOfJoining.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col mr-5">
                      <div className="flex gap-2 items-center">
                        <MdPersonalInjury
                          size={18}
                          className="2xl:h-6 2xl:w-6"
                        />
                        <label className="ml-1 font-medium text-sm 2xl:text-lg">
                          Designation
                        </label>
                      </div>
                      <input
                        type="text"
                        className="border-b-2 border-gray-400 mt-3 ml-6 focus:outline-none focus:border-gray-900 2xl:text-lg"
                        {...register("designation", {
                          required: "Please Enter the Designation",
                        })}
                      />
                      {errors.designation && (
                        <span className="text-red-500 text-xs">
                          {errors.designation.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col mr-5">
                      <div className="flex gap-2 items-center">
                        <LuBoxSelect size={18} className="2xl:h-6 2xl:w-6" />
                        <label className="ml-1 font-medium text-sm 2xl:text-lg ">
                          Employee ID
                        </label>
                      </div>
                      <input
                        type="text"
                        className="border-b-2 border-gray-400 mt-3 ml-6 focus:outline-none focus:border-gray-900 2xl:text-lg"
                        {...register("employeeId", {
                          required: "Please Enter the Employee ID",
                        })}
                      />
                      {errors.employeeId && (
                        <span className="text-red-500 text-xs">
                          {errors.employeeId.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col mr-5">
                      <div className="flex gap-2 items-center">
                        <CiBank size={18} className="2xl:h-6 2xl:w-6" />
                        <label className="ml-1 font-medium text-sm 2xl:text-lg">
                          Account No
                        </label>
                      </div>
                      <input
                        type="text"
                        className="border-b-2 border-gray-400 mt-3 ml-6 focus:outline-none focus:border-gray-900 2xl:text-lg"
                        {...register("accountNo")}
                      />
                    </div>
                    <div className="flex flex-col mr-5">
                      <div className="flex gap-2 items-center">
                        <CiBank size={18} className="2xl:h-6 2xl:w-6" />
                        <label className="ml-1 font-medium text-sm 2xl:text-lg 2xl:text-lg">
                          IFSC Code
                        </label>
                      </div>
                      <input
                        type="text"
                        className="border-b-2 border-gray-400 mt-3 ml-6 focus:outline-none focus:border-gray-900 2xl:text-lg"
                        {...register("ifscCode")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end m-2 text-sm rounded-md gap-4 2xl:text-xl">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-transparent border border-gray-900 text-gray-900 px-3 py-1 2xl:px-5 2xl:py-2 rounded-md mr-2 hover:bg-gray-900 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-500 text-white px-3 py-1 2xl:px-5 2xl:py-2 rounded-md hover:bg-blue-900"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
