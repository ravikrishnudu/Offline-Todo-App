import React from "react";
import styles from "./Footer.module.css";
function Footer({ clearCompleted, completed, incompleteCount }) {
  return (
    <div className={styles.footerButtons}>
      <button className={styles.footerButton}>
        {incompleteCount} {""}
        todo's left
      </button>

      <button className={styles.footerButton} onClick={clearCompleted}>
        clear completed
      </button>
    </div>
  );
}

export default Footer;
