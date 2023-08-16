import Styles from "./Email.module.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NewEmail from "../NewEmail/NewEmail";
import SentEmail from "../SentEmail/SentEmail";
import Spam from "../Spam/Spam";
import EmailContainer from "../EmailContainer/EmailContainer";
import Badge from "../badge/Badge";
function Email() {
  return (
    <div className={Styles.email}>
      <Badge>Email</Badge>
      <Navbar />
      <EmailContainer />
    </div>
  );
}

export default Email;
