import Styles from "./ProductsListNavbar.module.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import { useEffect, useState } from "react";
import { useDataBase } from "../../../Context/dataContext";
import { NavLink } from "react-router-dom";

function ProductsListNavbar() {
  const { fetchingData } = useDataBase();
  const activeTab = ({ isActive }) => {
    return isActive ? Styles.active : "";
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <nav className={Styles.navbar}>
      <ul>
        <li>
          <NavLink to="products/smartphones" className={activeTab}>
            <PhoneAndroidIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to="products/laptops" className={activeTab}>
            <LaptopChromebookIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ProductsListNavbar;
