import { useContext } from "react";
import styles from "./Firefox.module.scss";
import { AppContext } from "../../context/AppContext";

const Firefox = () => {
  const { browserOpen, setBrowserOpen } = useContext(AppContext);

  const openBrowser = (e) => {
    setBrowserOpen(!browserOpen);
  };

  return (
    <div className={styles.firefox}>
      <img
        onClick={openBrowser}
        src="https://leo.nyc3.digitaloceanspaces.com/ubuntu/firefox.png"
        alt="firefox icon"
      />
    </div>
  );
};

export default Firefox;
