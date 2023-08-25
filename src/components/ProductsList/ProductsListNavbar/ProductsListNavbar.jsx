import Styles from "./ProductsListNavbar.module.css";
import { useEffect, useState } from "react";
import { useDataBase } from "../../../Context/dataContext";

function ProductsListNavbar() {
  const { fetchingData } = useDataBase();
  const [category, setCategory] = useState("smartphones");

  const activePhones = category === "smartphones" ? Styles.active : "";
  const activeLaptop = category === "laptops" ? Styles.active : "";

  const choiceCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    fetchingData(category);
  }, [category]);

  return (
    <nav className={Styles.navbar}>
      <h2>Choose a category:</h2>
      <button onClick={choiceCategoryHandler} className={`${Styles.btnLeft} ${activePhones}`} value="smartphones">
        Phones
      </button>
      <button onClick={choiceCategoryHandler} className={`${Styles.btnRight} ${activeLaptop}`} value="laptops">
        Laptops
      </button>
    </nav>
  );
}

export default ProductsListNavbar;
