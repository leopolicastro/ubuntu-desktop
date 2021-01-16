import { useContext } from "react";
import styles from "./OsButtons.module.scss";
import { AppContext } from "../../context/AppContext";

const OsButtons = ({ maximize }) => {
  const { setBrowserOpen } = useContext(AppContext);

  return (
    <div className={styles.osButtons}>
      <i
        onClick={() => setBrowserOpen(false)}
        className="far fa-window-minimize"
      ></i>
      <i id="max" onClick={maximize} className="far fa-window-maximize"></i>
      <i
        onClick={() => setBrowserOpen(false)}
        className={`${styles.close} fas fa-times-circle`}
      ></i>
    </div>
  );
};

export default OsButtons;
