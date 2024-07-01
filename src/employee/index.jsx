import React from "react";
import Tabel from "./Tabel";
import Searchbar from "./Searchbar";
import Pagination from "../sharedComponents/Pagination";

export default function Employee() {
  return (
    <>
      <div>
        <Searchbar />
        <Tabel />
        <Pagination />
      </div>
    </>
  );
}
