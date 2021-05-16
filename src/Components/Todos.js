import React, { useState } from "react";
import styles from "./Todos.module.css";

function Todo({ todo }) {
  return (
    <div className={styles.listItem}>
      <div className={styles.checkbox}>
        <input type="checkbox" id="check-label" />
        <label htmlFor="check-label">{todo.name}</label>
      </div>
      <div className={styles.delete}>X</div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What need's to be done..."
        className={styles.inputValue}
      />
    </form>
  );
}

function Todos() {
  const [todos, setTodos] = useState([{ name: "asdasd", done: true }]);

  const addTodo = (name) => {
    const newTodos = [{ name }, ...todos];
    setTodos(newTodos);
  };

  return (
    <div className={styles.body}>
      <h1>todos</h1>
      <TodoForm addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
