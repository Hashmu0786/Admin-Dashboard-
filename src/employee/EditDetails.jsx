import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import {
  DepartmentList,
  EditEmpData,
  clearEmployeeData,
  fetchDataEmployee,
  oneEmployeeData,
} from "../reduxToolkit/empSlice";

export default function EditDetails({ setShowEditDetails, editId }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, reset } = useForm();
  const empData = useSelector((state) => state.employee.onedata);
  const depList = useSelector((state) => state.employee.depList);
  const [depid, setDepId] = useState("");

  useEffect(() => {
    async function fetchEmployeeDetails() {
      console.log("dispatch");
      await dispatch(oneEmployeeData(editId)).unwrap();
      await dispatch(DepartmentList()).unwrap();
    }
    fetchEmployeeDetails();
    return () => {
      dispatch(clearEmployeeData());
    };
  }, []);
  useEffect(() => {
    console.log(empData);

    reset({
      name: empData?.name || "",
      email: empData?.email || "",
      mobileNumber: empData?.mobileNumber || "",
      employeeId: empData?.employeeDetails?.employeeId || "",
      designation: empData?.employeeDetails?.designation || "",
      dateOfJoining: empData?.employeeDetails?.dateOfJoining || "",
      department: empData?.employeeDetails?.department?.name || "IT",

      gender: empData?.personalDetails?.gender || "",
      maritalStatus: empData?.personalDetails?.maritalStatus || "",
      bloodGroup: empData?.personalDetails?.bloodGroup || "",
      currentAddress: empData?.address?.currentAddress || "",
      permanentAddress: empData?.address?.permanentAddress || "",
      emergencyContactName: empData?.emergencyDetails?.contactName || "",
      emergencyContactNumber: empData?.emergencyDetails?.contactNumber || "",
      emergencyContactAddress: empData?.emergencyDetails?.contactAddress || "",
      emergencyContactRelationship:
        empData?.emergencyDetails?.relationship || "",
      accountNo: empData?.bankDetails?.accountNo || "",
      ifscCode: empData?.bankDetails?.ifscCode || "",
    });
  }, [empData]);

  const isLoading = useSelector((state) => state.employee.isLoading);
  const error = useSelector((state) => state.employee.error);
  const [activeSection, setActiveSection] = useState("personal");

  const handleDepartmentChange = (event) => {
    const selectedDepartmentName = event.target.value;
    console.log("event", event);
    console.log(selectedDepartmentName);
    const selectedDepartment = depList?.data?.find(
      (dep) => dep?.name === selectedDepartmentName
    );
    if (selectedDepartment) {
      setDepId(selectedDepartment._id);
      console.log("Selected Department ID:", selectedDepartment);
    }
  };

  const onSubmit = async (data) => {
    try {
      data.department = depid;
      // console.log(depid);
      await dispatch(EditEmpData({ id: editId, data }));
      await dispatch(fetchDataEmployee());
      console.log("my data", data);
      setShowEditDetails(false);
    } catch (error) {
      console.error("Error editing employee data:", error);
    }
  };

  const renderPersonalDetails = () => (
    <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5 font-[roboto]">
      <h2 className="text-lg 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 font-semibold">
        Edit Personal Details
      </h2>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <label className="font-bold text-sm">Name :</label>
          <input
            type="text"
            {...register("name")}
            className="border border-gray-300 rounded-md text-xs p-1"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-bold text-sm">Email :</label>
          <input
            type="email"
            {...register("email")}
            className="border border-gray-300 p-1 rounded-md text-xs"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-bold">Mobile Number :</label>
          <input
            type="text"
            {...register("mobileNumber")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-bold">Date Of Birth :</label>
          <input
            type="text"
            {...register("dateOfBirth")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>

        <div className="flex gap-4 items-center">
          <label className="font-bold">Gender :</label>
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
          <label className="font-bold">Permanent Address :</label>
          <input
            type="text"
            {...register("permanentAddress")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>

        <div className="flex gap-4 items-center">
          <label className="font-bold">Blood Group :</label>
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
          <label className="font-bold">Marital Status :</label>
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
          <label className="font-bold">Emergency Contact Name :</label>
          <input
            type="text"
            {...register("emergencyContactName")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-bold">Emergency Contact no :</label>
          <input
            type="text"
            {...register("emergencyContactNumber")}
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="font-bold">
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
      <h2 className="text-lg 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 font-semibold">
        Employee Details
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="font-bold">Employee ID : </label>
          <input
            type="text"
            {...register("employeeId")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>
        <div>
          <label className="font-bold">Employee Name : </label>
          <input
            type="text"
            {...register("name")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>
        <div>
          <label className="font-bold">Date of Joining : </label>
          <input
            type="text"
            {...register("dateOfJoining")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>
        <div>
          <label className="font-bold">Designation : </label>
          <input
            type="text"
            {...register("designation")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>

        {/* <div className="flex gap-4 items-center mb-4">
          <label className="font-bold">Department :</label>
          <select
            {...register("department")}
            defaultValue="IT"
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
          >
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div> */}

        <div className="flex gap-4 items-center mb-4">
          <label className="font-bold">Department :</label>
          <select
            {...register("department")}
            defaultValue="IT"
            className="border border-gray-300 rounded p-1 rounded-md text-xs"
            onChange={handleDepartmentChange}
          >
            {depList?.data?.map((dep) => (
              <option key={dep?._id} value={dep?.name}>
                {dep?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const renderBankDetails = () => (
    <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5">
      <h2 className="text-lg 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 font-semibold">
        Bank Details
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="font-bold">Account Number : </label>
          <input
            type="text"
            {...register("accountNo")}
            className="border border-gray-300 rounded p-1 text-xs"
          />
        </div>
        <div>
          <label className="font-bold">IFSC Code : </label>
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
        onClick={() => setShowEditDetails(false)}
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
                onClick={() => setShowEditDetails(false)}
                className="text-gray-800 hover:bg-gray-500 hover:text-white hover:rounded-lg 2xl:h-10 2xl:w-10"
              />
            </ul>
          </div>
          <form
            className="p-2 2xl:p-4 3xl:p-6 font-[roboto] text-sm 2xl:text-base 3xl:text-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            {activeSection === "personal" && renderPersonalDetails()}
            {activeSection === "employee" && renderEmployeeDetails()}
            {activeSection === "bank" && renderBankDetails()}
            <div className="flex gap-4 mt-4 justify-end">
              <button
                type="button"
                onClick={() => setShowEditDetails(false)}
                className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-700"
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
