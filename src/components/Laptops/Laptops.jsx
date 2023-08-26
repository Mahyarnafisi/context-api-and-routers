import Styles from "./Laptops.module.css";
import { useDataBase } from "../../Context/dataContext";
import { useEffect } from "react";

function Laptops() {
  const { laptopsData, fetchingLaptops } = useDataBase();

  useEffect(() => {
    fetchingLaptops();
  }, []);

  return (
    <div className={Styles.laptops}>
      Laptops
      {laptopsData.map((item, index) => {
        return <h1 key={index}>{item.title}</h1>;
      })}
    </div>
  );
}

export default Laptops;
