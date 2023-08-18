import Styles from "./AppLayout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import Header from "../Header/Header";

function AppLayout() {
  return (
    <div className={Styles.appLayout}>
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default AppLayout;
