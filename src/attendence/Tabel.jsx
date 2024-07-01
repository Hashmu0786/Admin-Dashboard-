import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

export default function Tabel() {
  const [editingRowId, setEditingRowId] = useState(null);

  const statusOptions = ["Present", "Absent", "Holiday", "Leave", "Weekend"];
  const approveOptions = ["Approve", "Pending", "Reject"];

  const [employees, setEmployees] = useState([
    {
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      EmployeesName: "John Doe",
      EmpID: "EMP001",
      Department: "HR",
      PunchIn: "09:00",
      PunchOut: "17:00",
      Status: "Present",
      Approve: "Approve",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      EmployeesName: "Jane Smith",
      EmpID: "EMP002",
      Department: "IT",
      PunchIn: "08:45",
      PunchOut: "17:30",
      Status: "Present",
      Approve: "Approve",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      EmployeesName: "Jane Smith",
      EmpID: "EMP002",
      Department: "IT",
      PunchIn: "08:45",
      PunchOut: "17:30",
      Status: "Present",
      Approve: "Approve",
      Actions: "Edit/Delete",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      EmployeesName: "Alice Johnson",
      EmpID: "EMP003",
      Department: "Sales",
      PunchIn: "09:15",
      PunchOut: "18:00",
      Status: "Absent",
      Approve: "Pending",
      Actions: "Edit/Delete",
    },
    {
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      EmployeesName: "John Doe",
      EmpID: "EMP001",
      Department: "HR",
      PunchIn: "09:00",
      PunchOut: "17:00",
      Status: "Present",
      Approve: "Approve",
      Actions: "Edit/Delete",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      EmployeesName: "Jane Smith",
      EmpID: "EMP002",
      Department: "IT",
      PunchIn: "08:45",
      PunchOut: "17:30",
      Status: "Present",
      Approve: "Approve",
      Actions: "Edit/Delete",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      EmployeesName: "Alice Johnson",
      EmpID: "EMP003",
      Department: "Sales",
      PunchIn: "09:15",
      PunchOut: "18:00",
      Status: "Absent",
      Approve: "Pending",
      Actions: "Edit/Delete",
    },
    {
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      EmployeesName: "John Doe",
      EmpID: "EMP001",
      Department: "HR",
      PunchIn: "09:00",
      PunchOut: "17:00",
      Status: "Present",
      Approve: "Approve",
      Actions: "Edit/Delete",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      EmployeesName: "Jane Smith",
      EmpID: "EMP002",
      Department: "IT",
      PunchIn: "08:45",
      PunchOut: "17:30",
      Status: "Present",
      Approve: "Approve",
      Actions: "Edit/Delete",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      EmployeesName: "Alice Johnson",
      EmpID: "EMP003",
      Department: "Sales",
      PunchIn: "09:15",
      PunchOut: "18:00",
      Status: "Absent",
      Approve: "Pending",
      Actions: "Edit/Delete",
    },
    {
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      EmployeesName: "John Doe",
      EmpID: "EMP001",
      Department: "HR",
      PunchIn: "09:00",
      PunchOut: "17:00",
      Status: "Present",
      Approve: "Approve",
      Actions: "Edit/Delete",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      EmployeesName: "Jane Smith",
      EmpID: "EMP002",
      Department: "IT",
      PunchIn: "08:45",
      PunchOut: "17:30",
      Status: "Present",
      Approve: "Approve",
      Actions: "Edit/Delete",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      EmployeesName: "Alice Johnson",
      EmpID: "EMP003",
      Department: "Sales",
      PunchIn: "09:15",
      PunchOut: "18:00",
      Status: "Absent",
      Approve: "Reject",
    },
  ]);

  const handleStatusChange = (e, empID) => {
    const newStatus = e.target.value;
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.EmpID === empID ? { ...emp, Status: newStatus } : emp
      )
    );
  };

  const handleApproveChange = (e, empID) => {
    const newApprove = e.target.value;
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.EmpID === empID ? { ...emp, Approve: newApprove } : emp
      )
    );
  };

  function getFormattedDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "short" });
    const year = today.getFullYear();

    return `${day} ${month} ${year}`;
  }
  const handleEditClick = (empID) => {
    setEditingRowId(empID);
  };

  const handleCancelClick = () => {
    setEditingRowId(null);
  };

  const handleSaveClick = () => {
    setEditingRowId(null);
  };

  return (
    <div className="w-[450px] mt-0 w-full">
      <div className=" flex font-inter ml-[-15px] font-semibold py-2 px-6 xl:py-3 xl:px-4 xl:ml-0 2xl:ml-[-10px] 2xl:px-4 ">
        <h2 className="text-[18px] 2xl:text-3xl 3xl:text-4xl ml-2 mt-2">
          Attendance Table
        </h2>
        <h2 className="text-[18px] 2xl:text-3xl 3xl:text-4xl ml-2 mt-2">
          {getFormattedDate()}
        </h2>
      </div>
      <hr />
      <div className="overflow-x-auto h-[450px] xl:h-[360px] 2xl:h-[660px] 3xl:h-[630px] border-b-2">
        <table className="w-auto">
          <thead className="sticky top-0 bg-white  font-medium text-[#333] 2xl:text-lg font-[roboto] ">
            <tr className="text-[12px]  2xl:text-[18px] 3xl:text-2xl">
              <th className="px-4 py-2 xl:px-6 2xl:py-4 2xl:px-2 3xl:py-5 3xl:px-8 text-left">
                S.no
              </th>
              <th className="px-4 py-2  2xl:py-4 2xl:px-4  text-left ">
                Employees Name
              </th>
              <th className="px-4 py-2  2xl:py-4 2xl:px-2 text-left">Emp.ID</th>
              <th className="px-4 py-2  2xl:py-4 2xl:px-2 text-left">
                Department
              </th>
              <th className="px-2 py-2 xl:px-4 2xl:py-4 2xl:px-4 text-left">
                Punch In
              </th>
              <th className="px-2 py-2  xl:px-4 2xl:py-4 2xl:px-4 text-left">
                Punch Out
              </th>
              <th className="px-2 py-2 xl:px-4 2xl:py-4 2xl:px-2 text-left">
                Working Hours
              </th>
              <th className="px-4 py-2 xl:px-6 2xl:py-4 2xl:px-8 text-left">
                Status
              </th>
              <th className="px-6 py-2 xl:px-4 2xl:py-4 2xl:px-6 text-left">
                Approve
              </th>
              <th className="pr-8 xl:px-4 2xl:py-4 2xl:px-[10px] text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-xs  font-medium font-[roboto] 2xl:text-lg 3xl:text-xl">
            {employees.map((row, index) => (
              <tr key={index}>
                <td className="py-3 px-4 xl:px-8 2xl:py-4 2xl:px-5 3xl:px-8">
                  {index + 1}
                </td>
                <td className="px-0 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                  <div className="flex items-center space-x-2 xl:space-x-3 2xl:space-x-5">
                    <img
                      src={row.image}
                      alt="Employee"
                      className="h-10 w-10 rounded-full 2xl:h-14 2xl:w-14"
                    />
                    <p>{row.EmployeesName}</p>
                  </div>
                </td>
                <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                  {row.EmpID}
                </td>
                <td className="py-3 px-4 2xl:py-5 2xl:px-6">
                  {row.Department}
                </td>
                <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  {row.PunchIn}
                </td>
                <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  {row.PunchOut}
                </td>
                <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  8 Hours{" "}
                </td>
                <td className="px-2 py-0 xl:px-4 2xl:py-5 2xl:px-6 text-center">
                  {editingRowId === row.EmpID ? (
                    <select
                      value={row.Status}
                      onChange={(e) => handleStatusChange(e, row.EmpID)}
                      className={
                        row.Status === "Present"
                          ? "bg-green-200 shadow text-green-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 xl:py-1 xl:px-1 2xl:py-2 2xl:px-4 rounded-lg"
                          : row.Status === "Leave"
                          ? "bg-amber-200 shadow text-amber-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:px-4 rounded-lg"
                          : row.Status === "Absent"
                          ? "bg-red-200 text-red-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:px-4 rounded-lg"
                          : row.Status === "Weekend"
                          ? "bg-blue-200 text-blue-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-4 rounded-lg"
                          : row.Status === "Holiday"
                          ? "bg-teal-200 text-teal-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-5 3xl:px-4 rounded-lg"
                          : ""
                      }
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status} className="text-xs">
                          {status}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span
                      className={
                        row.Status === "Present"
                          ? "bg-green-200 shadow text-green-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-2 text-center xl:py-1 xl:px-3 2xl:py-2 2xl:px-4 rounded-lg"
                          : row.Status === "Leave"
                          ? "bg-amber-200 shadow text-amber-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1  px-3 text-center xl:py-1 xl:px-5 2xl:py-2 2xl:px-6 rounded-lg"
                          : row.Status === "Absent"
                          ? "bg-red-200 text-red-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1  px-2 text-center xl:py-1 xl:px-3 2xl:py-2 2xl:px-4 rounded-lg"
                          : row.Status === "Weekend"
                          ? "bg-blue-200 text-blue-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-2 2xl:py-2 2xl:px-2 rounded-lg"
                          : row.Status === "Holiday"
                          ? "bg-teal-200 text-teal-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1  px-2 text-center xl:py-1 xl:px-3 2xl:py-2 2xl:px-4 rounded-lg"
                          : ""
                      }
                    >
                      {row.Status}
                    </span>
                  )}
                </td>
                <td className="py-1 px-6 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  {editingRowId === row.EmpID ? (
                    <select
                      value={row.Approve}
                      onChange={(e) => handleApproveChange(e, row.EmpID)}
                      className={
                        row.Approve === "Approve"
                          ? "bg-cyan-200 shadow text-cyan-800  text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 rounded-lg"
                          : row.Approve === "Pending"
                          ? "bg-slate-200 shadow text-slate-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 rounded-lg"
                          : row.Approve === "Reject"
                          ? "bg-fuchsia-200 text-fuchsia-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 rounded-lg"
                          : ""
                      }
                    >
                      {approveOptions.map((approve) => (
                        <option
                          key={approve}
                          value={approve}
                          className="text-xs"
                        >
                          {approve}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span
                      className={
                        row.Approve === "Approve"
                          ? "bg-cyan-200 shadow text-cyan-800  text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1  px-2 text-center xl:py-1 xl:px-3 2xl:py-2 2xl:px-4 rounded-lg"
                          : row.Approve === "Pending"
                          ? "bg-slate-200 shadow text-slate-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1  px-2 text-center xl:py-1 xl:px-3 2xl:py-2 2xl:px-5 rounded-lg"
                          : row.Approve === "Reject"
                          ? "bg-fuchsia-200 text-fuchsia-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-3 xl:py-1 xl:px-4 2xl:py-2 2xl:px-6 rounded-lg"
                          : ""
                      }
                    >
                      {row.Approve}
                    </span>
                  )}
                </td>
                <td className="py-1 px-0 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  {editingRowId === row.EmpID ? (
                    <div className="flex gap-4">
                      <IoMdCheckmarkCircle
                        size={20}
                        className="text-green-500 2xl:h-8 2xl:w-8 3xl:w-10 3xl:h-10"
                        onClick={handleSaveClick}
                      />
                      <MdCancel
                        size={20}
                        className="text-red-400 2xl:h-8 2xl:w-8 3xl:w-10 3xl:h-10"
                        onClick={handleCancelClick}
                      />
                    </div>
                  ) : (
                    <FaRegEdit
                      size={20}
                      className="text-[#121843] 2xl:h-8 2xl:w-8"
                      onClick={() => handleEditClick(row.EmpID)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
