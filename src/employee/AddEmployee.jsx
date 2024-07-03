import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import Loading from "../sharedComponents/Loading";
import Error from "../sharedComponents/Error";
import { useDispatch, useSelector } from "react-redux";
import { WorkTiming } from "../reduxToolkit/attendanceSlice";

export default function AddEmployee({ setShowAddEmployee }) {
  const { register, handleSubmit } = useForm();
  const [activeSection, setActiveSection] = useState("personal");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WorkTiming());
  }, []);

  const handleWorkTimeChange = (event) => {
    const selectedWorkTimeId = event.target.value;
    console.log("Selected Work Time ID:", selectedWorkTimeId);
  };
  const workTimedata = useSelector((state) => state.attendance.workTime);
  const isLoading = useSelector((state) => state.attendance.isLoading);
  const error = useSelector((state) => state.attendance.error);

  const renderPersonalDetails = () => (
    <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5 font-[roboto]">
      <h2 className="text-xl 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 font-semibold">
        Add Personal Details
      </h2>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">Name :</label>
          <input
            type="text"
            {...register("name")}
            className="border border-gray-300 rounded-md text-xs p-1"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">Email :</label>
          <input
            type="email"
            {...register("email")}
            className="border border-gray-300 p-1 rounded-md text-xs"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">Mobile Number :</label>
          <input
            type="text"
            {...register("mobileNumber")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">Date Of Birth :</label>
          <input
            type="date"
            {...register("dateOfBirth")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>

        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">Gender :</label>
          <select
            {...register("gender")}
            defaultValue="Male"
            className="border border-gray-300 rounded p-1 px-6 rounded-md text-xs"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">Permanent Address :</label>
          <input
            type="text"
            {...register("permanentAddress")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>

        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">Blood Group :</label>
          <select
            {...register("bloodGroup")}
            defaultValue="A"
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          >
            <option value="A">A</option>
            <option value="A+">A+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="B+">B+</option>
            <option value="O">O</option>
          </select>
        </div>

        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">Marital Status :</label>
          <select
            {...register("maritalStatus")}
            defaultValue="Single"
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">
            Emergency Contact Name :
          </label>
          <input
            type="text"
            {...register("emergencyContactName")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">Emergency Contact no :</label>
          <input
            type="text"
            {...register("emergencyContactNumber")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">
            Relationship to Emergency Contact:
          </label>
          <input
            type="text"
            {...register("emergencyContactRelationship")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>
      </div>
    </div>
  );

  const renderEmployeeDetails = () => (
    <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5">
      <h2 className="text-xl 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4  font-bold">
        Add Employee Details
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="font-medium text-sm">Employee ID : </label>
          <input
            type="text"
            {...register("employeeId")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>
        <div>
          <label className="font-medium text-sm">Employee Name : </label>
          <input
            type="text"
            {...register("name")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>
        <div>
          <label className="font-medium text-sm">Date of Joining : </label>
          <input
            type="text"
            {...register("dateOfJoining")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-medium text-sm">Work Time :</label>
          <select
            {...register("workTime")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
            onChange={handleWorkTimeChange}
          >
            {workTimedata?.data?.map((workTime) => (
              <option key={workTime._id} value={workTime._id}>
                {`${workTime.shiftType} - ${workTime.shiftStartTime} to ${workTime.shiftEndTime}`}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-medium text-sm">Designation : </label>
          <input
            type="text"
            {...register("designation")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>

        <div className="flex gap-4 items-center mb-4">
          <label className="font-medium text-sm">Department :</label>
          <select
            {...register("department")}
            defaultValue="IT"
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          >
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderBankDetails = () => (
    <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5">
      <h2 className="text-xl font-bold 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 ">
        Add Bank Details
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="font-medium text-sm">Account Number : </label>
          <input
            type="text"
            {...register("accountNo")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>
        <div>
          <label className="font-medium text-sm">IFSC Code : </label>
          <input
            type="text"
            {...register("ifscCode")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        onClick={() => setShowAddEmployee(false)}
        className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm p-4"
      >
        <div
          className="shadow-lg rounded-lg bg-white w-[700px] h-[550px] 2xl:w-[650px] 2xl:h-[550px] 3xl:w-[700px] 3xl:h-[650px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-gray-500 font-[roboto] text-sm 2xl:text-lg 3xl:text-xl font-medium border-b p-4">
            <ul className="flex justify-between cursor-pointer">
              <li
                className={`${
                  activeSection === "personal" ? "text-indigo-500" : ""
                }`}
                onClick={() => setActiveSection("personal")}
              >
                Add Personal Details
              </li>
              <li
                className={`${
                  activeSection === "employee" ? "text-indigo-500" : ""
                }`}
                onClick={() => setActiveSection("employee")}
              >
                Add Employee Details
              </li>
              <li
                className={`${
                  activeSection === "bank" ? "text-indigo-500" : ""
                }`}
                onClick={() => setActiveSection("bank")}
              >
                Add Bank Details
              </li>
              <li onClick={() => setShowEditDetails(false)}>
                <RxCross2
                  className="text-lg 2xl:text-xl 3xl:text-2xl hover:bg-gray-900 hover:text-white hover:rounded-md"
                  onClick={() => setShowAddEmployee(false)}
                />
              </li>
            </ul>
          </div>
          <div className="mt-4">
            {activeSection === "personal" && renderPersonalDetails()}
            {activeSection === "employee" && renderEmployeeDetails()}
            {activeSection === "bank" && renderBankDetails()}
          </div>
        </div>
      </div>
    </>
  );
}
