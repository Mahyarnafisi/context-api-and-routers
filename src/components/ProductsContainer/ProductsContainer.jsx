import { Outlet } from "react-router-dom";
import Styles from "./ProductsContainer.module.css";

function ProductsContainer() {
  return (
    <div className={Styles.emailContainer}>
      <Outlet />
    </div>
  );
}

export default ProductsContainer;
