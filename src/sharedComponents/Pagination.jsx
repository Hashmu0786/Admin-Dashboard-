import React from "react";

export default function Pagination() {
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <>
      {/* mx-5 */}
      <div className="flex justify-between items-center mx-5 items-center gap-4 font-[roboto]">
        <div className="flex gap-2">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold h-8 px-2 2xl:h-12 2xl:px-6 2xl:text-lg rounded-lg mt-3 text-xs font-medium">
            Prev
          </button>
          <div className="flex gap-1 rounded-lg h-8 mt-3 font-medium text-base 2xl:mt-5">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              {pageNumbers.map((number) => (
                <li key={number}>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 2xl:h-12 2xl:px-6 2xl:text-lg ${
                      number === 1 ? "rounded-s-lg" : ""
                    } ${number === pageNumbers.length ? "rounded-e-lg" : ""} ${
                      number === 3
                        ? "z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        : "hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                    aria-current={number === 3 ? "page" : undefined}
                  >
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold h-8 px-4 2xl:h-12 2xl:px-6 2xl:text-lg rounded-lg mt-3 text-xs font-medium">
            Next
          </button>
        </div>

        <div className="flex gap-2 mt-5 2xl:mt-5">
          <input
            type="number"
            placeholder="Go to the Page"
            className="bg-transparent border border-gray-400 h-8 px-4 mt-[-10px] rounded-lg h-8 w-[130px] 2xl:w-[200px] 3xl:w-[250px] text-xs font-medium 2xl:h-12 2xl:px-6 2xl:text-lg"
          />
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold h-8 px-4 2xl:h-12 2xl:px-6 2xl:text-lg mt-[-10px] rounded-lg text-xs font-medium">
            Go
          </button>
        </div>
      </div>
    </>
  );
}
