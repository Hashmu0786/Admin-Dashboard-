import React, { useState } from "react";
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
import SelectStatus from "./SelectStatus";

export default function Tabel({ date }) {
  const [editingRowId, setEditingRowId] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showStatus, setShowStatus] = useState(false);
  // console.log(showStatus)
  const statusOptions = ["present", "absent", "holiday", "Leave", "Weekend"];
  const approveOptions = ["approved", "pending", "Reject"];
  const dispatch = useDispatch();

  const {
    Todaydata: Todaydata,
    isLoading,
    error,
  } = useSelector((state) => state?.attendance);

  console.log("my today data", Todaydata);

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

  //Edit single attendance
  const handleSaveClick = async (id) => {
    setEditingRowId(null);
    console.log("edit data of approve ", formData);
    await dispatch(EditStatus({ id, data: formData }));
    if (sendDate) {
      await dispatch(AttendanceTodayData(sendDate));
    } else {
      await dispatch(AttendanceTodayData(dateFormat(now, "yyyy-mm-dd")));
    }
  };

  const handleCheckboxChange = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  // const handlerowids = async () => {
  //   console.log("Selected Row IDs: ", selectedRows);
  //   await setEditStatus((prevStatus) => ({
  //     ...prevStatus,
  //     ids: [...selectedRows],
  //   }));

  //   console.log(editstatus);
  // };

  return (
    <div className="w-[450px] mt-0 w-full">
      <div className=" flex font-inter ml-[-15px] font-semibold py-2 px-6 xl:py-3 xl:px-4 xl:ml-0 2xl:ml-[-10px] 2xl:px-4 ">
        <h2 className="text-[18px] 2xl:text-3xl 3xl:text-4xl ml-2 mt-2">
          Attendance Table
        </h2>
        <h2 className="text-[18px] 2xl:text-3xl 3xl:text-4xl ml-2 mt-2">
          {dateFormat(date, " mmmm dS, yyyy")}
        </h2>
        <div className="flex ml-[500px] mt-2">
          {selectedRows.length > 0 && (
            <button
              onClick={() => setShowStatus(true)}
              className="ml-4 bg-transparent text-xs hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-1 px-2 border border-indigo-800 hover:border-transparent rounded-lg"
            >
              Edit Attendance
            </button>
          )}
        </div>
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
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRows(
                          Todaydata.attendanceRecords.map((row) => row._id)
                        );
                      } else {
                        setSelectedRows([]);
                      }
                    }}
                  />
                </th>
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
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row._id)}
                      onChange={() => handleCheckboxChange(row._id)}
                    />
                  </td>
                  <td className="py-3 px-4 xl:px-8 2xl:py-4 2xl:px-5 3xl:px-8">
                    {index + 1}
                  </td>
                  <td className="px-0 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                    <div className="flex items-center space-x-2 xl:space-x-3 2xl:space-x-5">
                      {row.image ? (
                        <img
                          src={row.image}
                          alt="Employee"
                          className="h-10 w-10 rounded-full 2xl:h-14 2xl:w-14"
                        />
                      ) : (
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                          <p className="text-xs 2xl:text-base">
                            {row?.employeeId?.name
                              .split(" ")
                              .map((name) => name.charAt(0))
                              .join("")}
                          </p>
                        </div>
                      )}
                      <p>{row?.employeeId?.name}</p>
                    </div>
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                    {row.EmpID}
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                    {row.department}
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                    {row.punchIn}
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                    {row.punchOut}
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                    {row.workingHours}
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
                  {/*        */}
                  <td className="flex space-x-2 xl:space-x-3 py-3 px-4 xl:px-6 2xl:py-5 2xl:px-8">
                    {editingRowId === row._id ? (
                      <>
                        <button onClick={() => handleSaveClick(row._id)}>
                          <IoMdCheckmarkCircle
                            className="h-5 w-5 xl:h-6 xl:w-6 text-green-500"
                            aria-hidden="true"
                          />
                        </button>
                        <button onClick={handleCancelClick}>
                          <MdCancel
                            className="h-5 w-5 xl:h-6 xl:w-6 text-red-500"
                            aria-hidden="true"
                          />
                        </button>
                      </>
                    ) : (
                      <button onClick={() => handleEditClick(row._id)}>
                        <FaRegEdit
                          className="h-5 w-5 xl:h-6 xl:w-6 text-blue-500"
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {showStatus ? (
        <SelectStatus
          setShowStatus={setShowStatus}
          status={showStatus}
          date={date}
          selectedRows={selectedRows}
        />
      ) : null}
    </div>
  );
}
