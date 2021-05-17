import styles from "./Todo.module.css";

import React from "react";

function Todo({ todo, handleCheck, deleteTodo }) {
  const { id } = todo;
  return (
    <div className={styles.newTodos}>
      <div>
        <input
          type="checkbox"
          id="check"
          name="check"
          onChange={() => handleCheck(id)}
          className={styles.checkbox}
        />
        <label htmlFor="check">{todo.name}</label>
      </div>
      <div className={styles.delete} onClick={() => deleteTodo(id)}>
        X
      </div>
    </div>
  );
}

export default Todo;
