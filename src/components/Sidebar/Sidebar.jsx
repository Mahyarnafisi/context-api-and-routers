import ListItem from "../ListItem/ListItem";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Styles from "./Sidebar.module.css";
import Badge from "../badge/Badge";

function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <Badge>Menu</Badge>
      <ListItem />
    </div>
  );
}

export default Sidebar;
