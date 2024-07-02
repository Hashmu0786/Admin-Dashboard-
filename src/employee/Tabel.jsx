import React, { useEffect, useState } from "react";
import Details from "./Details";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataEmployee, oneEmployeeData } from "../reduxToolkit/empSlice";
import Delete from "./Delete";
import EditDetails from "./EditDetails";
import Loading from "../sharedComponents/Loading";
import Error from "../sharedComponents/Error";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

export default function Table() {
  const dispatch = useDispatch();
  const {
    data: empData,
    isLoading,
    error,
  } = useSelector((state) => state.employee);

  const [showDetails, setShowDetails] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [showEditDetails, setShowEditDetails] = useState(false);

  const handleDeleteId = (id) => {
    setUniqueId(id);
    setShowDelete(!showDelete);
    console.log("my id ", id);
  };

  const handleEditDetails = async (id) => {
    setUniqueId(id);
    setShowEditDetails(!showEditDetails);
    console.log("edit id", id);
  };

  useEffect(() => {
    dispatch(fetchDataEmployee());
  }, [dispatch]);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day}${month} ${year}`;
  };

  const handleViewDetails = (Id) => {
    dispatch(oneEmployeeData(Id));
    setShowDetails(!showDetails);
  };

  const getInitials = (name) => {
    if (!name) return "NA";
    const names = name.split(" ");
    const initials = names.map((n) => n[0]).join("");
    return initials.toUpperCase();
  };

  return (
    <div className="w-full mt-0">
      <div className="font-inter ml-[-15px] font-semibold py-2 px-6 xl:py-3 xl:px-4 xl:ml-0 2xl:ml-[-10px] 2xl:px-4">
        <h2 className="text-[18px] 2xl:text-3xl 3xl:text-4xl ml-2 mt-2">
          Employee Table
        </h2>
      </div>
      <hr />
      <div className="overflow-x-auto w-full h-[450px] xl:h-[360px] 2xl:h-[660px] 3xl:h-[630px] border-b-2">
        {isLoading ? (
          <div className="flex justify-center mt-40">
            <Loading />
          </div>
        ) : error ? (
          <div className="flex justify-center mt-40">
            <Error />
          </div>
        ) : (
          <table className="w-full">
            <thead className="sticky top-0 bg-white z-10 font-medium text-[#333] 2xl:text-lg font-[roboto]">
              <tr className="text-[12px] 2xl:text-[18px] 3xl:text-2xl border-b-2">
                <th className="px-4 py-2 xl:px-6 2xl:py-4 2xl:px-2 3xl:py-5 3xl:px-8 text-left">
                  S.no
                </th>
                <th className="px-4 py-2 2xl:py-4 2xl:px-4 text-left">
                  Employees Name
                </th>
                <th className="px-4 py-2 2xl:py-4 2xl:px-2 text-left">
                  Emp.ID
                </th>
                <th className="px-4 py-2 2xl:py-4 2xl:px-2 text-left">
                  Department
                </th>
                <th className="px-2 py-2 xl:px-4 2xl:py-4 2xl:px-4 text-left">
                  Designation
                </th>
                <th className="px-2 py-2 xl:px-4 2xl:py-4 2xl:px-4 text-left">
                  D.O.J
                </th>
                <th className="pr-8 xl:px-4 2xl:py-4 2xl:px-[10px] text-left">
                  Actions
                </th>
                <th className="pr-8 xl:px-4 2xl:py-4 2xl:px-[10px] text-left">
                  Edit
                </th>
                <th className="pr-8 xl:px-4 2xl:py-4 2xl:px-[10px] text-left">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="text-xs font-medium font-[roboto] 2xl:text-lg 3xl:text-xl">
              {empData?.employees?.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 xl:px-8 2xl:py-4 2xl:px-5 3xl:px-8">
                    {index + 1}
                  </td>
                  {/* <td className="px-0 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                    <div className="flex items-center space-x-2 xl:space-x-3 2xl:space-x-5">
                      <img
                        src={row.img || "N/A"}
                        alt="Employee"
                        className="h-10 w-10 rounded-full 2xl:h-14 2xl:w-14"
                      />
                      <p>{row.name || "N/A"}</p>
                    </div>
                  </td> */}

                  <td className="px-0 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                    <div className="flex items-center space-x-2 xl:space-x-3 2xl:space-x-5">
                      {row.img ? (
                        <img
                          src={row.img}
                          alt="Employee"
                          className="h-10 w-10 rounded-full 2xl:h-14 2xl:w-14"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "";
                          }}
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full 2xl:h-14 2xl:w-14 bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                          {getInitials(row.name)}
                        </div>
                      )}
                      <p>{row.name || "N/A"}</p>
                    </div>
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-4">
                    {row.employeeDetails?.employeeId || "N/A"}
                    {/* {row._id} */}
                  </td>
                  <td className="py-3 px-4 2xl:py-5 2xl:px-6">
                    {row.employeeDetails?.department?.name || "N/A"}
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-6">
                    {row.employeeDetails?.designation || "N/A"}
                  </td>
                  <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-6">
                    {formatDate(row.employeeDetails?.dateOfJoining)}
                  </td>
                  <td className="py-1 px-0 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6">
                    <button
                      className="bg-blue-200 shadow text-blue-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-2 xl:py-1 xl:px-1 2xl:py-2 2xl:px-4 rounded-lg"
                      onClick={() => handleViewDetails(row._id)}
                    >
                      View Details
                    </button>
                  </td>
                  <td className="py-1 px-0 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6 text-blue-800">
                    <button onClick={() => handleEditDetails(row._id)}>
                      <RiEdit2Fill size={20} />
                    </button>
                  </td>
                  <td
                    className="py-1 px-0 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6 text-rose-500"
                    onClick={() => handleDeleteId(row._id)}
                  >
                    <button>
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {showDetails ? <Details setShowDetails={setShowDetails} /> : null}
      {showDelete ? (
        <Delete setShowDelete={setShowDelete} deleteId={uniqueId} />
      ) : null}
      {showEditDetails ? (
        <EditDetails
          setShowEditDetails={setShowEditDetails}
          editId={uniqueId}
        />
      ) : null}
    </div>
  );
}
