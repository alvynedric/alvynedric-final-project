import React from "react";
import { Outlet } from "react-router-dom";
import ItemNavbar from "../components/ItemNavbar";

const ItemLayout = () => {
  return (
    <div>
      {/* <ItemNavbar></ItemNavbar> */}
      <Outlet></Outlet>
    </div>
  );
};

export default ItemLayout;
