import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AttendanceTodayData } from "../reduxToolkit/attendanceSlice";
import Loading from "../sharedComponents/Loading";
import Error from "../sharedComponents/Error";

export default function Tabel() {
  const [editingRowId, setEditingRowId] = useState(null);
  const statusOptions = ["present", "absent", "holiday", "Leave", "Weekend"];
  const approveOptions = ["approve", "pending", "Reject"];
  const dispatch = useDispatch();
  const {
    Todaydata: Todaydata,
    isLoading,
    error,
  } = useSelector((state) => state?.attendance);

  console.log("my today data", Todaydata);

  const getDateForApi = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // dispatch(AttendanceTodayData(getDateForApi()));
    dispatch(AttendanceTodayData());
  }, [dispatch, getDateForApi()]);

  function getFormattedDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "short" });
    const year = today.getFullYear();

    return `${day} ${month} ${year}`;
  }

  const [formData, setFormData] = useState({
    approvalStatus: "",
    attendanceStatus: "",
  });
  // Handle select change for attendance status

  const handleAttendanceChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      attendanceStatus: value,
    });
  };
  // Handle select change for approval status

  const handleApprovalChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      approvalStatus: value,
    });
  };
  const handleEditClick = (empID) => {
    setEditingRowId(empID);
  };

  const handleCancelClick = () => {
    setEditingRowId(null);
  };

  const handleSaveClick = () => {
    setEditingRowId(null);
    console.log("edit data of approve ", formData);
  };

  function formatTimeforpunchin(dateString) {
    const date = new Date(dateString);

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const timeString = `${hours}:${formattedMinutes} ${ampm}`;

    return timeString;
  }

  function formatTimeforpunchout(dateString) {
    const date = new Date(dateString);

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const timeString = `${hours}:${formattedMinutes} ${ampm}`;

    return timeString;
  }

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
        {isLoading ? (
          <div className="flex justify-center mt-40">
            <Loading />
          </div>
        ) : error ? (
          <div className="flex justify-center mt-40">
            <Error />
          </div>
        ) : (
          <table className="w-auto">
            <thead className="sticky top-0 bg-white  font-medium text-[#333] 2xl:text-lg font-[roboto] ">
              <tr className="text-[12px]  2xl:text-[18px] 3xl:text-2xl">
                <th className="px-4 py-2 xl:px-6 2xl:py-4 2xl:px-2 3xl:py-5 3xl:px-8 text-left">
                  S.no
                </th>
                <th className="px-4 py-2  2xl:py-4 2xl:px-4  text-left ">
                  Employees Name
                </th>
                <th className="px-4 py-2  2xl:py-4 2xl:px-2 text-left">
                  Emp.ID
                </th>
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
              {Todaydata?.attendanceRecords?.map((row, index) => (
                <tr key={row._id}>
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
                      <p>{row?.employeeId?.name}</p>
                    </div>
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                    {row.EmpID}
                  </td>
                  <td className="py-3 px-4 2xl:py-5 2xl:px-6">
                    {row.Department}
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-6">
                    {/* {row.PunchIn} */}
                    {formatTimeforpunchin(row.punchInTime)}
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-6">
                    {formatTimeforpunchout(row.punchOutTime)}
                  </td>
                  <td className="px-2 py-3  xl:px-4 2xl:py-5 2xl:px-6">
                    {row?.duration ? row.duration : "--"}
                  </td>

                  <td className="px-2 py-0 xl:px-4 2xl:py-5 2xl:px-6 text-center">
                    {editingRowId === row._id ? (
                      <select
                        name="attendanceStatus"
                        value={row.status}
                        onChange={handleAttendanceChange}
                        className={
                          row.attendanceStatus === "present"
                            ? "bg-green-200 shadow text-green-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 xl:py-1 xl:px-1 2xl:py-2 2xl:px-4 rounded-lg"
                            : row.attendanceStatus === "Leave"
                            ? "bg-amber-200 shadow text-amber-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:px-4 rounded-lg"
                            : row.attendanceStatus === "absent"
                            ? "bg-red-200 text-red-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:px-4 rounded-lg"
                            : row.attendanceStatus === "halfday"
                            ? "bg-blue-200 text-blue-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-4 rounded-lg"
                            : row.attendanceStatus === "Holiday"
                            ? "bg-teal-200 text-teal-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-5 3xl:px-4 rounded-lg"
                            : ""
                        }
                      >
                        {statusOptions.map((status) => (
                          <option
                            key={status}
                            value={status}
                            className="text-xs"
                          >
                            {status}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span
                        className={
                          row.attendanceStatus === "present"
                            ? "bg-green-200 shadow text-green-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-2 text-center xl:py-1 xl:px-3 2xl:py-2 2xl:px-4 rounded-lg"
                            : row.attendanceStatus === "Leave"
                            ? "bg-amber-200 shadow text-amber-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1  px-3 text-center xl:py-1 xl:px-5 2xl:py-2 2xl:px-6 rounded-lg"
                            : row.attendanceStatus === "absent"
                            ? "bg-red-200 text-red-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1  px-2 text-center xl:py-1 xl:px-3 2xl:py-2 2xl:px-4 rounded-lg"
                            : row.attendanceStatus === "halfday"
                            ? "bg-blue-200 text-blue-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-2 2xl:py-2 2xl:px-2 rounded-lg"
                            : row.attendanceStatus === "Holiday"
                            ? "bg-teal-200 text-teal-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1  px-2 text-center xl:py-1 xl:px-3 2xl:py-2 2xl:px-4 rounded-lg"
                            : ""
                        }
                      >
                        {row.attendanceStatus}
                        {console.log(
                          "My attendace status",
                          row.attendanceStatus
                        )}
                      </span>
                    )}
                  </td>
                  <td className="py-1 px-6 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6">
                    {editingRowId === row._id ? (
                      <select
                        name="approvalStatus"
                        value={row.approve}
                        onChange={handleApprovalChange}
                        className={
                          row.approvalStatus === "approved"
                            ? "bg-cyan-200 shadow text-cyan-800  text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 rounded-lg"
                            : row.approvalStatus === "pending"
                            ? "bg-slate-200 shadow text-slate-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 rounded-lg"
                            : row.approvalStatus === "Reject"
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
                          row.approvalStatus === "approved"
                            ? "bg-cyan-200 shadow text-cyan-800  text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1  px-2 text-center xl:py-1 xl:px-3 2xl:py-2 2xl:px-4 rounded-lg"
                            : row.approvalStatus === "pending"
                            ? "bg-slate-200 shadow text-slate-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1  px-2 text-center xl:py-1 xl:px-3 2xl:py-2 2xl:px-5 rounded-lg"
                            : row.approvalStatus === "Reject"
                            ? "bg-fuchsia-200 text-fuchsia-800 shadow text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-3 xl:py-1 xl:px-4 2xl:py-2 2xl:px-6 rounded-lg"
                            : ""
                        }
                      >
                        {row.approvalStatus}
                      </span>
                    )}
                  </td>
                  <td className="py-1 px-0 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6">
                    {editingRowId === row._id ? (
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
                        onClick={() => handleEditClick(row._id)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
