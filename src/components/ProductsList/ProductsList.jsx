import Styles from "./ProductsList.module.css";
import { useDataBase } from "../../Context/dataContext";
import { Outlet } from "react-router-dom";

function ProductsList() {
  // if (isLoading) return <Spinner />;

  return (
    <div className={Styles.newEmail}>
      <Outlet />
    </div>
  );
}

export default ProductsList;
