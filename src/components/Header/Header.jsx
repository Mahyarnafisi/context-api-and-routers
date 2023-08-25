import Styles from "./Header.module.css";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ApiIcon from "@mui/icons-material/Api";
import { useDataBase } from "../../Context/dataContext";

function Header() {
  const { isLoading } = useDataBase();

  return (
    <div className={Styles.header}>
      <div className={Styles.title}>
        <h1>
          <ApiIcon />
          {isLoading ? "loading" : " Routers and Context API"}
        </h1>
      </div>
      <div className={Styles.modeBox}>
        <h3>
          Change the <br /> mode:
        </h3>
        <button>
          <Brightness4Icon />
        </button>
      </div>
    </div>
  );
}

export default Header;
