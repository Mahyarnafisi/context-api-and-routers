import { Button } from "@mui/material";
import Styles from "./Header.module.css";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ApiIcon from "@mui/icons-material/Api";

function Header() {
  return (
    <div className={Styles.header}>
      <div className={Styles.title}>
        <h1>
          <ApiIcon />
          Routers and Context API
        </h1>
      </div>
      <div className={Styles.modeBox}>
        <h3>
          Change the <br /> mode:{" "}
        </h3>
        <button className={Styles.mode}>
          <Brightness4Icon />
        </button>
      </div>
    </div>
  );
}

export default Header;
