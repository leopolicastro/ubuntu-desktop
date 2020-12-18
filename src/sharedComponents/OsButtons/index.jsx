import { useContext } from "react";
import styles from "./OsButtons.module.scss";
import { AppContext } from "../../context/AppContext";

const OsButtons = () => {
  const { setBrowserOpen } = useContext(AppContext);

  return (
    <div className={styles.osButtons}>
      <i class="far fa-window-minimize"></i>
      <i class="far fa-window-maximize"></i>
      <i
        onClick={() => setBrowserOpen(false)}
        class={`${styles.close} fas fa-times-circle`}
      ></i>
    </div>
  );
};

export default OsButtons;
