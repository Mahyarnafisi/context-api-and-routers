import { Route, Routes } from "react-router-dom";
import Styles from "./Email.module.css";
import Navbar from "../Navbar/Navbar";
import NewEmail from "../NewEmail/NewEmail";
import SentEmail from "../SentEmail/SentEmail";
import Spam from "../Spam/Spam";
import EmailContainer from "../EmailContainer/EmailContainer";
function Email() {
  return (
    <div className={Styles.email}>
      <Navbar />
      <EmailContainer />
    </div>
  );
}

export default Email;
