import ListItem from "../ListItem/ListItem";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <h1>Menu</h1>
      <ListItem />
    </div>
  );
}

export default Sidebar;
