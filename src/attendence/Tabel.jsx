import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  AttendanceTodayData,
  EditStatus,
} from "../reduxToolkit/attendanceSlice";
import Loading from "../sharedComponents/Loading";
import Error from "../sharedComponents/Error";
import dateFormat from "dateformat";

export default function Tabel() {
  const [editingRowId, setEditingRowId] = useState(null);
  const statusOptions = ["present", "absent", "holiday", "Leave", "Weekend"];
  const approveOptions = ["approved", "pending", "Reject"];
  const dispatch = useDispatch();

  const now = new Date();

  const {
    Todaydata: Todaydata,
    isLoading,
    error,
  } = useSelector((state) => state?.attendance);

  console.log("my today data", Todaydata);

  useEffect(() => {
    console.log("again Calling or not");

    dispatch(AttendanceTodayData(dateFormat(now, "yyyy-mm-dd")));
    // dispatch(AttendanceTodayData(formattedDate));

    console.log("again Calling");
  }, [dispatch]);

  const [formData, setFormData] = useState({
    approvalStatus: "",
    attendanceStatus: "",
  });

  const handleAttendanceChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      attendanceStatus: value,
    });
  };

  const handleApprovalChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      approvalStatus: value,
    });
  };

  const handleEditClick = (empID) => {
    setEditingRowId(empID);
    const rowData = Todaydata.attendanceRecords.find(
      (row) => row._id === empID
    );
    setFormData({
      approvalStatus: rowData?.approvalStatus || "",
      attendanceStatus: rowData?.attendanceStatus || "",
    });
  };

  const handleCancelClick = () => {
    setEditingRowId(null);
  };

  const handleSaveClick = async (id) => {
    setEditingRowId(null);
    console.log("edit data of approve ", formData);
    await dispatch(EditStatus({ id, data: formData }));
    await dispatch(AttendanceTodayData(dateFormat(now, "yyyy-mm-dd")));
  };

  return (
    <div className="w-[450px] mt-0 w-full">
      <div className=" flex font-inter ml-[-15px] font-semibold py-2 px-6 xl:py-3 xl:px-4 xl:ml-0 2xl:ml-[-10px] 2xl:px-4 ">
        <h2 className="text-[18px] 2xl:text-3xl 3xl:text-4xl ml-2 mt-2">
          Attendance Table
        </h2>
        <h2 className="text-[18px] 2xl:text-3xl 3xl:text-4xl ml-2 mt-2">
          {dateFormat(now, " mmmm dS, yyyy")}
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
                    {row.PunchIn
                      ? dateFormat(row.PunchIn, "UTC:h:MM TT")
                      : "--"}
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-6">
                    {row.punchOutTime
                      ? dateFormat(row.punchOutTime, "UTC:h:MM TT")
                      : "--"}
                  </td>
                  <td className="px-2 py-3  xl:px-4 2xl:py-5 2xl:px-6">
                    {row?.duration ? row.duration : "--"}
                  </td>

                  <td className="px-2 py-0 xl:px-4 2xl:py-5 2xl:px-6 text-center">
                    {editingRowId === row._id ? (
                      <select
                        name="attendanceStatus"
                        value={formData.attendanceStatus}
                        onChange={handleAttendanceChange}
                        className={
                          formData.attendanceStatus === "present"
                            ? "bg-green-200 shadow text-green-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 xl:py-1 xl:px-1 2xl:py-2 2xl:px-4 rounded-lg"
                            : formData.attendanceStatus === "Leave"
                            ? "bg-amber-200 shadow text-amber-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
                            : formData.attendanceStatus === "Weekend"
                            ? "bg-blue-200 shadow text-blue-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
                            : formData.attendanceStatus === "absent"
                            ? "bg-red-200 shadow text-red-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
                            : formData.attendanceStatus === "holiday"
                            ? "bg-cyan-200 shadow text-cyan-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
                            : ""
                        }
                      >
                        {statusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <>
                        {row.attendanceStatus === "present" ? (
                          <p className="bg-green-200 shadow text-green-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 xl:py-1 xl:px-1 2xl:py-2 2xl:px-4 rounded-lg">
                            {row.attendanceStatus}
                          </p>
                        ) : row.attendanceStatus === "Leave" ? (
                          <p className="bg-amber-200 shadow text-amber-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg">
                            {row.attendanceStatus}
                          </p>
                        ) : row.attendanceStatus === "Weekend" ? (
                          <p className="bg-blue-200 shadow text-blue-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg">
                            {row.attendanceStatus}
                          </p>
                        ) : row.attendanceStatus === "absent" ? (
                          <p className="bg-red-200 shadow text-red-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg">
                            {row.attendanceStatus}
                          </p>
                        ) : row.attendanceStatus === "holiday" ? (
                          <p className="bg-cyan-200 shadow text-cyan-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg">
                            {row.attendanceStatus}
                          </p>
                        ) : null}
                      </>
                    )}
                  </td>
                  <td className="px-2 py-0 xl:px-4 2xl:py-5 2xl:px-6 text-center">
                    {editingRowId === row._id ? (
                      <select
                        name="approvalStatus"
                        value={formData.approvalStatus}
                        onChange={handleApprovalChange}
                        className={
                          formData.approvalStatus === "approved"
                            ? "bg-green-200 shadow text-green-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
                            : formData.approvalStatus === "Reject"
                            ? "bg-red-200 shadow text-red-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
                            : formData.approvalStatus === "pending"
                            ? "bg-gray-200 shadow text-gray-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
                            : ""
                        }
                      >
                        {approveOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <>
                        {row.approvalStatus === "approved" ? (
                          <p className="bg-green-200 shadow text-green-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg">
                            {row.approvalStatus}
                          </p>
                        ) : row.approvalStatus === "Reject" ? (
                          <p className="bg-red-200 shadow text-red-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg">
                            {row.approvalStatus}
                          </p>
                        ) : row.approvalStatus === "pending" ? (
                          <p className="bg-gray-200 shadow text-gray-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg">
                            {row.approvalStatus}
                          </p>
                        ) : null}
                      </>
                    )}
                  </td>
                  <td className="py-3 px-4 xl:px-4 2xl:py-4 2xl:px-6">
                    {editingRowId === row._id ? (
                      <div className="flex space-x-4">
                        <button className="text-green-500 text-lg">
                          <IoMdCheckmarkCircle
                            className="h-6 w-6 2xl:h-8 2xl:w-8"
                            onClick={() => handleSaveClick(row._id)}
                          />
                        </button>
                        <button
                          onClick={handleCancelClick}
                          className="text-red-500 text-lg"
                        >
                          <MdCancel className="h-6 w-6 2xl:h-8 2xl:w-8" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEditClick(row._id)}
                        className="text-blue-500 text-lg"
                      >
                        <FaRegEdit className="h-6 w-6 2xl:h-8 2xl:w-8" />
                      </button>
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
