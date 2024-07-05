import React, { useState } from "react";
import Tabel from "./Tabel";
import Searchbar from "./Searchbar";
import Pagination from "../sharedComponents/Pagination";

export default function Attendance() {
  const [sendDate, setSendDate] = useState(null);
  return (
    <>
      <div>
        <Searchbar setSendDate={setSendDate} />
        <Tabel sendDate={sendDate} />
        <Pagination />
      </div>
    </>
  );
}
