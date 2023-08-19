import { NavLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import Styles from "./ListItem.module.css";

function ListItem() {
  const isActiveTab = ({ isActive }) => (isActive ? `${Styles.active}` : `${Styles.inactive}`);
  return (
    <div className={Styles.listItem}>
      <ul>
        <li>
          <NavLink to="email" className={isActiveTab}>
            <EmailIcon /> Email
          </NavLink>
        </li>

        <li>
          <NavLink to="profile" className={isActiveTab}>
            <PersonIcon /> Profile
          </NavLink>
        </li>

        <li>
          <NavLink to="setting" className={isActiveTab}>
            <SettingsIcon /> Setting
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ListItem;
