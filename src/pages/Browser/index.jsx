import { useState } from "react";
import styles from "./Browser.module.scss";
import BrowserBar from "./components/BrowserBar";

const Browser = () => {
  const [maximized, setMaximized] = useState(false);
  const maximize = () => {
    const browser = document.getElementById("browser");
    if (!maximized) {
      browser.style.width = "88vw";
      browser.style.height = "99vh";
      browser.style.marginTop = 0;
      setMaximized(true);
    } else {
      browser.style.width = "60vw";
      browser.style.height = "75vh";
      browser.style.marginTop = "5rem";
      setMaximized(false);
    }
  };
  return (
    <div className={styles.browser} id="browser">
      <BrowserBar maximize={maximize} />
      <h1>Welcome</h1>
    </div>
  );
};

export default Browser;
