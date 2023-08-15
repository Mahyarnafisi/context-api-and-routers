import { Outlet } from "react-router-dom";

import Styles from "./Main.module.css";

function Main() {
  return (
    <div className={Styles.main}>
      <Outlet />
    </div>
  );
}

export default Main;
