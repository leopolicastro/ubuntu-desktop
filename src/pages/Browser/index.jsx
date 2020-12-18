import styles from "./Browser.module.scss";
import BrowserBar from "./components/BrowserBar";

const Browser = () => {
  return (
    <div className={styles.browser}>
      <BrowserBar />
      <h1>Welcome</h1>
    </div>
  );
};

export default Browser;
