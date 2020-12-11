import styles from "./SideNav.module.scss";

const SideNav = () => {
  return (
    <div className={styles.sidenav}>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
};

export default SideNav;
