import React from "react";
import Searchbar from "./Searchbar";
import Pagination from "../sharedComponents/Pagination";
import Tabel from "./Tabel";

export default function Leave() {
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
