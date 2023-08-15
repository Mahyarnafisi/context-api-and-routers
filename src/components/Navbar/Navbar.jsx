import Styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";
function Navbar() {
  const isActiveTab = ({ isActive }) => (isActive ? `${Styles.active}` : `${Styles.inactive}`);
  return (
    <div className={Styles.navbar}>
      <ul>
        <li className="nav">
          <NavLink to="newEmail" className={isActiveTab}>
            New Email
          </NavLink>
        </li>

        <li className="nav">
          <NavLink to="sentEmail" className={isActiveTab}>
            Sent Email
          </NavLink>
        </li>

        <li className="nav">
          <NavLink to="spam" className={isActiveTab}>
            Spam
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
