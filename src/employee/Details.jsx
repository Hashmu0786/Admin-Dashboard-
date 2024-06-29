import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function Details({ setShowDetails }) {
  const empData = useSelector((state) => state.employee.onedata);
  const isLoading = useSelector((state) => state.employee.isLoading);
  const error = useSelector((state) => state.employee.error);

  const [activeSection, setActiveSection] = useState("personal");
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    toggleEditMode();
  };

  const handleCancel = () => {
    toggleEditMode();
  };

  // console.log(empData)

  return (
    <>
      <div
        onClick={() => setShowDetails(false)}
        className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm p-4"
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
              <CiEdit
                size={25}
                onClick={toggleEditMode}
                className={`text-gray-800 mr-[-25px] hover:bg-blue-500 hover:text-white hover:rounded-lg 2xl:h-10 2xl:w-10 ${
                  editMode ? "hidden" : ""
                }`}
              />
              <RxCross2
                size={25}
                onClick={() => setShowDetails(false)}
                className="text-gray-800 hover:bg-gray-500 hover:text-white hover:rounded-lg 2xl:h-10 2xl:w-10"
              />
            </ul>
          </div>

          <div className="p-2 2xl:p-4 3xl:p-6 font-[roboto] text-sm 2xl:text-base 3xl:text-lg">
            {activeSection === "personal" && (
              <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5">
                <div className="flex justify-between">
                  <h2 className="text-lg 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 font-semibold">
                    Personal Details
                  </h2>
                  {editMode ? (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="border bg-green-500 text-white px-1 py-1 rounded-lg text-sm  hover:bg-green-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="border bg-gray-500 text-white px-1 py-1 rounded-lg text-sm hover:bg-gray-900"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : null}
                </div>

                {[
                  { label: "Full Name :", value: empData?.name || "NA" },
                  {
                    label: "Date Of Birth :",
                    value: empData.personalDetails?.Dob || "NA",
                  },
                  {
                    label: "Gender :",
                    value: empData.personalDetails?.gender || "NA",
                  },
                  {
                    label: "Contact no:",
                    value: empData?.mobileNumber || "NA",
                  },
                  {
                    label: "Full Address :",
                    value: empData.address?.currentAddress || "NA",
                  },
                  {
                    label: "Blood Group :",
                    value: empData.personalDetails?.bloodGroup || "NA",
                  },
                  {
                    label: "Marital Status :",
                    value: empData.personalDetails?.maritalStatus || "NA",
                  },
                  {
                    label: "Emergency Contact no :",
                    value: empData.emergencyDetails?.contactNumber || "NA",
                  },
                  {
                    label: "Emergency Person Name :",
                    value: empData.emergencyDetails?.contactName || "NA",
                  },
                  {
                    label: "Relationship to Emergency Contact :",
                    value: empData.emergencyDetails?.relationship || "NA",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <p className="font-bold">{item.label}</p>
                    {editMode ? (
                      <input
                        type="text"
                        className="border rounded-md  w-[150px]"
                        defaultValue={item.value} // Replace with state value and onChange handler
                      />
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeSection === "employee" && (
              <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5">
                <h2 className="text-lg 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 font-semibold">
                  Employee Details
                </h2>
                {[
                  {
                    label: "Employee ID :",
                    value: empData.employeeDetails?.employeeId || "NA",
                  },
                  {
                    label: "Designation :",
                    value: empData.employeeDetails?.designation || "NA",
                  },
                  { label: "Email :", value: empData?.email || "NA" },
                  { label: "Phone no :", value: empData?.mobileNumber || "NA" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <p className="font-bold">{item.label}</p>
                    {editMode ? (
                      <input
                        type="text"
                        className="border rounded-md p-1 w-[200px]"
                        defaultValue={item.value} // Replace with state value and onChange handler
                      />
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeSection === "bank" && (
              <div className="flex flex-col gap-2 2xl:gap-3 3xl:gap-4 ml-5">
                <h2 className="text-lg 2xl:text-2xl 2xl:mb-2 3xl:text-3xl 3xl:mb-4 font-semibold">
                  Bank Details
                </h2>
                {[
                  {
                    label: "Account Holder Name :",
                    value: empData?.bankHolder,
                  },
                  { label: "Account Number :", value: empData?.accountNumber },
                  { label: "IFSC Code :", value: empData?.ifsc },
                  { label: "Bank Name :", value: empData?.bankName },
                  { label: "Branch Name :", value: empData?.branchName },
                ].map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <p className="font-bold">{item.label}</p>
                    {editMode ? (
                      <input
                        type="text"
                        className="border rounded-md p-1 w-[200px]"
                        defaultValue={item.value} // Replace with state value and onChange handler
                      />
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
