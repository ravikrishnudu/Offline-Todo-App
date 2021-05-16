import React, { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    addTodo(inputValue, JSON.parse(localStorage.getItem("Todos")));
    // JSON.parse(localStorage.getItem("Todos"))
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="What need's to be done..."
          className={styles.inputValue}
        />
      </form>
      <div className={styles.buttonDiv}>
        <button className={styles.resetButton}>Reset</button>
      </div>
    </>
  );
}

export default TodoForm;