import { useDataBase } from "../../Context/dataContext";
import Styles from "./ProductsList.module.css";
import ProductsListNavbar from "./ProductsListNavbar/ProductsListNavbar";
function ProductsList() {
  const { products } = useDataBase();

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
