import Badge from "../badge/Badge";
import Styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={Styles.profile}>
      <Badge>Profile</Badge>
    </div>
  );
}

export default Profile;
