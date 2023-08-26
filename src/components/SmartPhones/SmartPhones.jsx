import Styles from "./SmartPhones.module.css";
import { useDataBase } from "../../Context/dataContext";
import { useEffect } from "react";

function SmartPhones() {
  const { smartphonesData, fetchingSmartphones } = useDataBase();

  useEffect(() => {
    fetchingSmartphones();
  }, []);

  return (
    <div className={Styles.smartphones}>
      SmartPhones
      {smartphonesData.map((item, index) => {
        return <h1 key={index}>{item.title}</h1>;
      })}
    </div>
  );
}

export default SmartPhones;
