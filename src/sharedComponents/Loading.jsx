import React from "react";

export default function Loading() {
  return (
    <button className="border-none bg-white py-2 px-4 flex items-center gap-4 text-gray-700 text-base rounded-lg shadow-lg cursor-wait">
      <div className="loader w-6 h-6 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
      Loading ...
    </button>
  );
}
