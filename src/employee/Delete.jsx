import React from "react";
import { useDispatch } from "react-redux";
import { DeltetOneEmployee, fetchDataEmployee } from "../reduxToolkit/empSlice";

export default function Delete({ setShowDelete, deleteId }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(DeltetOneEmployee(deleteId)).then(() => {
      dispatch(fetchDataEmployee());
      setShowDelete(false);
    });
  };

  return (
    <>
      <div
        onClick={() => setShowDelete(false)}
        className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center font-[roboto] min-h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm p-4"
      >
        <div
          className="flex flex-col gap-10 shadow-lg bg-white p-16 rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-3xl font-medium ">
            <h1 className="text-gray-800">Are you sure ?</h1>
          </div>
          <div className="flex gap-8">
            <button
              onClick={() => setShowDelete(false)}
              className="bg-gray-200 text-gray-900 rounded-lg  px-4 py-3 text-sm font-medium  hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="bg-rose-200 text-rose-900 rounded-lg text-sm  px-6 py-3 font-medium hover:bg-rose-800 hover:text-white"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
