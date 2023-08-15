import { Routes, Route, Outlet } from "react-router-dom";
import Styles from "./EmailContainer.module.css";
import NewEmail from "../NewEmail/NewEmail";
import SentEmail from "../SentEmail/SentEmail";
import Spam from "../Spam/Spam";

function EmailContainer() {
  return (
    <div className={Styles.emailContainer}>
      <Outlet />
    </div>
  );
}

export default EmailContainer;
