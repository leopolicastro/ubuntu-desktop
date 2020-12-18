import styles from "./BrowserBar.module.scss";
import OsButtons from "../../../../sharedComponents/OsButtons";
const BrowserBar = () => {
  return (
    <div className={`${styles.browserBar}`}>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>Mozilla Firefox</div>
      <div className={styles.buttonsDiv}>
        <OsButtons />
      </div>
    </div>
  );
};

export default BrowserBar;
