import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Styles from "./NewEmail.module.css";
function NewEmail() {
  return (
    <div className={Styles.newEmail}>
      <h1>new Email</h1>
    </div>
  );
}

export default NewEmail;
