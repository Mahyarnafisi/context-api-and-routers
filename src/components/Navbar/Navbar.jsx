import Styles from "./Navbar.module.css";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { NavLink } from "react-router-dom";
function Navbar() {
  const isActiveTab = ({ isActive }) => (isActive ? `${Styles.active}` : `${Styles.inactive}`);
  return (
    <div className={Styles.navbar}>
      <ul>
        <li className="nav">
          <NavLink to="products" className={isActiveTab}>
            <MarkunreadIcon /> Products
          </NavLink>
        </li>

        {/* <li className="nav">
          <NavLink to="sentEmail" className={isActiveTab}>
            <SendIcon /> Sent Email
          </NavLink>
        </li>

        <li className="nav">
          <NavLink to="spam" className={isActiveTab}>
            <ErrorOutlineIcon /> Spam
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
