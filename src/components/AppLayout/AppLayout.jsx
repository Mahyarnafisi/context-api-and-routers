import Styles from "./AppLayout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

function AppLayout() {
  return (
    <div className={Styles.appLayout}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default AppLayout;
