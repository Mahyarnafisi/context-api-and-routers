import { Outlet } from "react-router-dom";
import Styles from "./EmailContainer.module.css";

function EmailContainer() {
  return (
    <div className={Styles.emailContainer}>
      <Outlet />
    </div>
  );
}

export default EmailContainer;
