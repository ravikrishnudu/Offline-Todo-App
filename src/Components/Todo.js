import styles from "./Todo.module.css";

import React from "react";

function Todo({ todo, handleCheck, deleteTodo }) {
  const { id } = todo;
  return (
    <div className={styles.newTodos}>
      <div className={styles.newtodo}>
        <input
          type="checkbox"
          id="checkbox"
          className={styles.checkbox}
          onChange={() => handleCheck(id)}
        />
        <label htmlFor="checkbox">{todo.name}</label>
      </div>
      <div className={styles.delete} onClick={() => deleteTodo(id)}>
        X
      </div>
    </div>
  );
}

export default Todo;
