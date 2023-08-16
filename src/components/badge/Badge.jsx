import Styles from "./Badge.module.css";

function Badge({ children }) {
  return <div className={Styles.badge}>{children}</div>;
}

export default Badge;
