// // import React, { useState } from "react";
// // import { MdOutlineCancel } from "react-icons/md";
// // import { useDispatch } from "react-redux";
// // import { MultiEditStatus } from "../reduxToolkit/attendanceSlice";
// // import {
// //   getHoverColor,
// //   getHoverColor2,
// //   getStatusColor,
// //   getStatusColor2,
// // } from "./colors";

// // export default function SelectStatus({ setShowStatus, selectedRows, date }) {
// //   const dispatch = useDispatch();
// //   const [attendanceStatus, setAttendanceStatus] = useState(null);
// //   const [approvalStatus, setApprovalStatus] = useState(null);

// //   const handleAttendanceClick = (status) => {
// //     setAttendanceStatus(status);
// //   };

// //   const handleApprovalClick = (status) => {
// //     setApprovalStatus(status);
// //   };

// //   const handleSubmit = async () => {
// //     console.log("Dispatch data:", {
// //       ids: selectedRows,
// //       attendanceStatus,
// //       approvalStatus,
// //     });

// //     dispatch(
// //       MultiEditStatus({
// //         ids: selectedRows,
// //         attendanceStatus,
// //         approvalStatus,
// //       })
// //     );

// //     setShowStatus(false); // Hide the status modal after submission
// //   };

// //   return (
// //     <div
// //       onClick={() => setShowStatus(false)}
// //       className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-start font-roboto min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
// //     >
// //       <div
// //         className="flex flex-col gap-5 shadow-lg bg-white p-14 rounded-lg mt-20"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <div className="flex justify-between">
// //           <h1 className="text-xl font-medium text-gray-900 mt-[-20px] mb-5">
// //             Edit Attendance
// //           </h1>
// //           <MdOutlineCancel
// //             size={30}
// //             className="text-gray-400 mt-[-30px] hover:text-red-400 cursor-pointer"
// //             onClick={() => setShowStatus(false)}
// //           />
// //         </div>
// //         <div className="flex flex-col items-start gap-5">
// //           <h2 className="text-sm font-medium font-[poppins]">
// //             Attendance Status
// //           </h2>

// //           <div className="flex gap-5">
// //             {["PRESENT", "ABSENT", "HALF DAY", "WEEK OFF", "HOLIDAY"].map(
// //               (status) => (
// //                 <button
// //                   key={status}
// //                   className={`${
// //                     attendanceStatus === status.toLowerCase()
// //                       ? getStatusColor(status.toLowerCase())
// //                       : getHoverColor(status.toLowerCase())
// //                   } text-xs py-1 px-4 font-normal border rounded-xl`}
// //                   onClick={() => handleAttendanceClick(status.toLowerCase())}
// //                 >
// //                   {status}
// //                 </button>
// //               )
// //             )}
// //           </div>
// //         </div>
// //         <hr />
// //         <div className="flex flex-col items-start gap-5">
// //           <h2 className="text-sm font-medium font-[poppins]">
// //             Approval Status
// //           </h2>
// //           <div className="flex gap-5">
// //             {["PENDING", "APPROVED", "REJECTED"].map((status) => (
// //               <button
// //                 key={status}
// //                 className={`${
// //                   approvalStatus === status.toLowerCase()
// //                     ? getStatusColor2(status.toLowerCase())
// //                     : getHoverColor2(status.toLowerCase())
// //                 } text-xs py-1 px-4 font-normal border rounded-xl`}
// //                 onClick={() => handleApprovalClick(status.toLowerCase())}
// //               >
// //                 {status}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //         <div className="mt-10">
// //           <button
// //             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg"
// //             onClick={handleSubmit}
// //           >
// //             Submit
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import { MdOutlineCancel } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { MultiEditStatus } from "../reduxToolkit/attendanceSlice";
// import {
//   getHoverColor,
//   getHoverColor2,
//   getStatusColor,
//   getStatusColor2,
// } from "./colors";

// export default function SelectStatus({ setShowStatus, selectedRows, date }) {
//   const dispatch = useDispatch();
//   const [attendanceStatus, setAttendanceStatus] = useState(null);
//   const [approvalStatus, setApprovalStatus] = useState(null);

//   const handleAttendanceClick = (status) => {
//     setAttendanceStatus(status);
//   };

//   const handleApprovalClick = (status) => {
//     setApprovalStatus(status);
//   };

//   const handleSubmit = async () => {
//     console.log("Dispatch data:", {
//       ids: selectedRows,
//       attendanceStatus,
//       approvalStatus,
//     });

//     dispatch(
//       MultiEditStatus({
//         ids: selectedRows,
//         attendanceStatus,
//         approvalStatus,
//       })
//     );

//     setShowStatus(false); // Hide the status modal after submission
//   };

//   return (
//     <div
//       onClick={() => setShowStatus(false)}
//       className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-start font-roboto min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
//     >
//       <div
//         className="flex flex-col gap-5 shadow-lg bg-white p-14 rounded-lg mt-20"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex justify-between">
//           <h1 className="text-xl font-medium text-gray-900 mt-[-20px] mb-5">
//             Edit Attendance
//           </h1>
//           <MdOutlineCancel
//             size={30}
//             className="text-gray-400 mt-[-30px] hover:text-red-400 cursor-pointer"
//             onClick={() => setShowStatus(false)}
//           />
//         </div>
//         <div className="flex flex-col items-start gap-5">
//           <h2 className="text-sm font-medium font-[poppins]">
//             Attendance Status
//           </h2>

//           {/* <div className="flex gap-5">
//             {["PRESENT", "ABSENT", "HALF DAY", "WEEK OFF", "HOLIDAY"].map(
//               (status) => (
//                 <button
//                   key={status}
//                   className={`${
//                     attendanceStatus === status.toLowerCase()
//                       ? "bg-gray-400 text-white"
//                       : "bg-transparent text-green-700 hover:bg-green-500 hover:text-white"
//                   } text-xs py-1 px-4 font-normal border rounded-xl`}
//                   onClick={() => handleAttendanceClick(status.toLowerCase())}
//                 >
//                   {status}
//                 </button>
//               )
//             )}
//           </div> */}

//           <div className="flex gap-5">
//             {["PRESENT", "ABSENT", "HALF DAY", "WEEK OFF", "HOLIDAY"].map(
//               (status) => (
//                 <button
//                   key={status}
//                   className={`${
//                     attendanceStatus === status.toLowerCase()
//                       ? status === "present"
//                         ? "bg-green-200 shadow text-green-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 xl:py-1 xl:px-1 2xl:py-2 2xl:px-4 rounded-lg"
//                         : status === "HALF DA"
//                         ? "bg-amber-200 shadow text-amber-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
//                         : status === "WEEK OFF"
//                         ? "bg-blue-200 shadow text-blue-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
//                         : attendanceStatus === "absent"
//                         ? "bg-red-200 shadow text-red-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
//                         : status === "HOLIDAY"
//                         ? "bg-cyan-200 shadow text-cyan-800 text-[10px] 2xl:text-[16px] 3xl:text-[18px] py-1 px-1 text-center xl:py-1 xl:px-1 2xl:py-2 2xl:px-6 3xl:py-3 rounded-lg"
//                         : ""
//                       : "bg-transparent text-green-700 hover:bg-green-500 hover:text-white"
//                   } text-xs py-1 px-4 font-normal border rounded-xl`}
//                   onClick={() => handleAttendanceClick(status.toLowerCase())}
//                 >
//                   {status}
//                 </button>
//               )
//             )}
//           </div>
//         </div>
//         <hr />
//         <div className="flex flex-col items-start gap-5">
//           <h2 className="text-sm font-medium font-[poppins]">
//             Approval Status
//           </h2>
//           <div className="flex gap-5">
//             {["PENDING", "APPROVED", "REJECTED"].map((status) => (
//               <button
//                 key={status}
//                 className={`${
//                   approvalStatus === status.toLowerCase()
//                     ? "bg-gray-400 text-white"
//                     : "bg-transparent text-blue-700 hover:bg-blue-500 hover:text-white"
//                 } text-xs py-1 px-4 font-normal border rounded-xl`}
//                 onClick={() => handleApprovalClick(status.toLowerCase())}
//               >
//                 {status}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="mt-10">
//           <button
//             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { MultiEditStatus } from "../reduxToolkit/attendanceSlice";
import {
  getHoverColor,
  getHoverColor2,
  getStatusColor,
  getStatusColor2,
} from "./colors";

export default function SelectStatus({ setShowStatus, selectedRows, date }) {
  const dispatch = useDispatch();
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState(null);

  const handleAttendanceClick = (status) => {
    setAttendanceStatus(status);
  };

  const handleApprovalClick = (status) => {
    setApprovalStatus(status);
  };

  const handleSubmit = async () => {
    console.log("Dispatch data:", {
      ids: selectedRows,
      attendanceStatus,
      approvalStatus,
    });

    dispatch(
      MultiEditStatus({
        ids: selectedRows,
        attendanceStatus,
        approvalStatus,
      })
    );

    setShowStatus(false); // Hide the status modal after submission
  };

  return (
    <div
      onClick={() => setShowStatus(false)}
      className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-start font-roboto min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
    >
      <div
        className="flex flex-col gap-5 shadow-lg bg-white p-14 rounded-lg mt-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h1 className="text-xl font-medium text-gray-900 mt-[-20px] mb-5">
            Edit Attendance
          </h1>
          <MdOutlineCancel
            size={30}
            className="text-gray-400 mt-[-30px] hover:text-red-400 cursor-pointer"
            onClick={() => setShowStatus(false)}
          />
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-sm font-medium font-[poppins]">
            Attendance Status
          </h2>
          {/* <div className="flex gap-5">
            {["PRESENT", "ABSENT", "WEEK OFF", "HOLIDAY"].map((status) => (
              <button
                key={status}
                className={`${
                  // attendanceStatus === status.toLowerCase()
                  attendanceStatus === status
                    ? attendanceStatus === "PRESENT"
                      ? "bg-green-200 shadow text-green-800 text-xs py-1 px-4 font-normal border rounded-xl"
                      : attendanceStatus === "ABSENT"
                      ? "bg-red-200 shadow text-red-800 text-xs py-1 px-4 font-normal border rounded-xl"
                      : attendanceStatus === "HALF DAY"
                      ? "bg-yellow-300 shadow text-yellow-800 text-xs py-1 px-4 font-normal border rounded-xl"
                      : attendanceStatus === "WEEK OFF"
                      ? "bg-blue-200 shadow text-blue-800 text-xs py-1 px-4 font-normal border rounded-xl"
                      : attendanceStatus === "HOLIDAY"
                      ? "bg-cyan-200 shadow text-cyan-800 text-xs py-1 px-4 font-normal border rounded-xl"
                      : ""
                    : "bg-transparent text-green-700 hover:bg-green-500 hover:text-white text-xs py-1 px-4 font-normal border rounded-xl"
                }`}
                onClick={() => handleAttendanceClick(status.toLowerCase())}
              >
                {status}
              </button>
            ))}
          </div> */}

          <div className="flex gap-5">
            {["PRESENT", "ABSENT", "WEEK OFF", "HOLIDAY"].map((status) => (
              <button
                key={status}
                className={`${
                  attendanceStatus === status
                    ? attendanceStatus === "PRESENT"
                      ? "bg-green-200 shadow text-green-800 text-xs py-1 px-4 font-normal border rounded-xl"
                      : attendanceStatus === "ABSENT"
                      ? "bg-red-200 shadow text-red-800 text-xs py-1 px-4 font-normal border rounded-xl"
                      : attendanceStatus === "HALF DAY"
                      ? "bg-yellow-300 shadow text-yellow-800 text-xs py-1 px-4 font-normal border rounded-xl"
                      : attendanceStatus === "WEEK OFF"
                      ? "bg-blue-200 shadow text-blue-800 text-xs py-1 px-4 font-normal border rounded-xl"
                      : attendanceStatus === "HOLIDAY"
                      ? "bg-cyan-200 shadow text-cyan-800 text-xs py-1 px-4 font-normal border rounded-xl"
                      : ""
                    : "bg-transparent text-green-700 hover:bg-green-500 hover:text-white text-xs py-1 px-4 font-normal border rounded-xl"
                }`}
                onClick={() => handleAttendanceClick(status.toLowerCase())}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
        <hr />
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-sm font-medium font-[poppins]">
            Approval Status
          </h2>
          <div className="flex gap-5">
            {["PENDING", "APPROVED", "REJECTED"].map((status) => (
              <button
                key={status}
                className={`${
                  approvalStatus === status.toLowerCase()
                    ? "bg-gray-400 text-white text-xs py-1 px-4 font-normal border rounded-xl"
                    : "bg-transparent text-blue-700 hover:bg-blue-500 hover:text-white text-xs py-1 px-4 font-normal border rounded-xl"
                }`}
                onClick={() => handleApprovalClick(status.toLowerCase())}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
