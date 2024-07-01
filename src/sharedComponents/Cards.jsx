import React from "react";

export default function Cards() {
  const data = [
    {
      title: "Total employees",
      count: 18,
      des: "2 Urgently needed",
    },
    {
      title: "Today Present",
      count: 15,
      des: "5 Active hiring",
    },
    {
      title: "Today Absent",
      count: 10,
      des: "5 Active now",
    },
  ];

  return (
    <div
      // xl:ml-10 2xl:ml-[-10px]
      className="flex gap-1  xl:gap-2  mt-2 items-start font-poppins
      2xl:gap-5
    "
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 shadow-md rounded-lg w-[150px] p-2 xl:w-[200px] xl:p-5 
          2xl:w-[250px] 2xl:p-8 2xl:gap-5
          "
        >
          <p className="text-md font-medium 2xl:text-xl">{item.title}</p>
          <h4 className="text-xl font-medium 2xl:text-3xl">{item.count}</h4>
          <p className="text-[10px] xl:text-xs font-normal 2xl:text-base">
            {item.des}
          </p>
        </div>
      ))}
    </div>
  );
}
