import React, { useEffect, useState } from "react";
import Tabel from "./Tabel";
import Searchbar from "./Searchbar";
import Pagination from "../sharedComponents/Pagination";
import { AttendanceTodayData } from "../reduxToolkit/attendanceSlice";
import dateFormat from "dateformat";
import { useDispatch } from "react-redux";
export default function Attendance() {
  const [date, setDate] = useState(new Date());
  const [search, setSearch] = useState("");
 
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(dateFormat(date, "yyyy-mm-dd"));
    let filterQuery = {};
    if (search && search != "") filterQuery.employeeName = search;
    if (date) filterQuery.date = dateFormat(date, "yyyy-mm-dd");
    console.log("filter Query", filterQuery);
    dispatch(AttendanceTodayData(filterQuery));
  }, [search, date]);
  return (
    <>
      <div>
        <Searchbar
          search={search}
          setSearch={setSearch}
          setDate={setDate}
          date={date}
        />
        <Tabel date={date} />
        <Pagination />
      </div>
    </>
  );
}
