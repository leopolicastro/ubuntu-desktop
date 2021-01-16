import styles from "./SideNav.module.scss";
import Firefox from "../Firefox";
const SideNav = () => {
  return (
    <div className={styles.sidenav}>
      <div className={styles.innerSideNav}>
        <div>
          <Firefox />
        </div>
        <div className={styles.bottomDiv}>
          <i className="fas fa-th"></i>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
