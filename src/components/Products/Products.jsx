import Styles from "./Products.module.css";
import Navbar from "../Navbar/Navbar";
import Badge from "../badge/Badge";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
function Products() {
  return (
    <div className={Styles.products}>
      <Badge>Products</Badge>
      <Navbar />
      <ProductsContainer />
    </div>
  );
}

export default Products;
