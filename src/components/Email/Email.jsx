import Styles from "./Email.module.css";
import Navbar from "../Navbar/Navbar";
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
