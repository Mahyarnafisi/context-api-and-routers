import { useDataBase } from "../../Context/dataContext";
import Spinner from "../Spinner/Spinner";

import Styles from "./ProductsList.module.css";
import ProductsListNavbar from "./ProductsListNavbar/ProductsListNavbar";
function ProductsList() {
  const { products, isLoading } = useDataBase();
  console.log(isLoading);

  return (
    <div className={Styles.newEmail}>
      <ProductsListNavbar />

      {products.map((item, index) => {
        return <h1 key={index}>{item.title}</h1>;
      })}
    </div>
  );
}

export default ProductsList;
