import React from "react";
import styles from "./Footer.module.css";
function Footer({ clearCompleted, completed, incompleteCount }) {
  return (
    <div>
      <button className={styles.footerButtons}>
        {incompleteCount}
        items left{" "}
      </button>
      <button className={styles.footerButtons}>All</button>
      <button className={styles.footerButtons}>Active</button>
      <button className={styles.footerButtons} onClick={completed}>
        completed
      </button>
      <button className={styles.footerButtons} onClick={clearCompleted}>
        clear completed
      </button>
    </div>
  );
}

export default Footer;
