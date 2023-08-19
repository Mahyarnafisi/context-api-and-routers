import Styles from "./Header.module.css";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ApiIcon from "@mui/icons-material/Api";
import { useTheme } from "../../Context/ThemeMode";

function Header() {
  const { theme, setTheme, modeToggle } = useTheme();

  return (
    <div className={Styles.header} style={modeToggle}>
      <div className={Styles.title}>
        <h1>
          <ApiIcon />
          Routers and Context API
        </h1>
      </div>
      <div className={Styles.modeBox}>
        <h3>
          Change the <br /> mode:
        </h3>
        <button onClick={() => setTheme(!theme)} className={Styles.mode}>
          <Brightness4Icon />
        </button>
      </div>
    </div>
  );
}

export default Header;
