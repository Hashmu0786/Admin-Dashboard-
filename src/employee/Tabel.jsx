import React, { useState } from "react";

export default function Tabel() {
  const [employees, setEmployees] = useState([
    {
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      EmployeesName: "John Doe",
      EmpID: "EMP001",
      Department: "HR",
      Designation: "Manager",
      DOJ: "01-01-2020",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      EmployeesName: "Jane Smith",
      EmpID: "EMP002",
      Department: "IT",
      Designation: "Developer",
      DOJ: "01-02-2020",
    },
  ]);

  return (
    <div className="w-[450px] mt-0 w-full">
      <div className="font-inter ml-[-15px] font-semibold py-2 px-6 xl:py-3 xl:px-4 xl:ml-0 2xl:ml-[-10px] 2xl:px-4 ">
        <h2 className="text-[18px] 2xl:text-3xl 3xl:text-4xl ml-2 mt-2">
          Employee Table
        </h2>
      </div>

      <hr />
      <div className="overflow-x-auto w-full  h-[450px] xl:h-[360px] 2xl:h-[660px] 3xl:h-[630px] border-b-2">
        <table className="w-full">
          <thead className="sticky top-0 bg-white z-10 font-medium text-[#333] 2xl:text-lg font-[roboto]">
            <tr className="text-[12px] 2xl:text-[18px] 3xl:text-2xl">
              <th className="px-4 py-2 xl:px-6 2xl:py-4 2xl:px-2 3xl:py-5 3xl:px-8 text-left">
                S.no
              </th>
              <th className="px-4 py-2 2xl:py-4 2xl:px-4 text-left">
                Employees Name
              </th>
              <th className="px-4 py-2 2xl:py-4 2xl:px-2 text-left">Emp.ID</th>
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
            </tr>
          </thead>
          <tbody className="text-xs font-medium font-[roboto] 2xl:text-lg 3xl:text-xl">
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
                  {row.Designation}
                </td>
                <td className="px-2 py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  {row.DOJ}
                </td>
                <td className="py-1 px-0 xl:py-3 xl:px-4 2xl:py-5 2xl:px-6">
                  <button className="bg-blue-200 shadow text-blue-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-2 xl:py-1 xl:px-1 2xl:py-2 2xl:px-4 rounded-lg">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}