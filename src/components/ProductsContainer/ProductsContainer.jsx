import { Outlet } from "react-router-dom";
import Styles from "./ProductsContainer.module.css";
import ProductsListNavbar from "../ProductsList/ProductsListNavbar/ProductsListNavbar";

function ProductsContainer() {
  return (
    <div className={Styles.emailContainer}>
      <ProductsListNavbar />
      <Outlet />
    </div>
  );
}

export default ProductsContainer;
