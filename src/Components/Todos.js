import React, { useState } from "react";
import styles from "./Todos.module.css";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.header}>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            inputValue={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What need's to be done..."
            className={styles.inputValue}
          />
        </form>
      </div>
      <div>
        <button className={styles.resetButton}>Reset</button>
      </div>
    </div>
  );
}

function Todo({ todo }) {
  return (
    <div className={styles.newTodos}>
      <div className={styles.newtodo}>
        <input type="checkbox" id="checkbox" className={styles.checkbox} />
        <label htmlFor="checkbox">{todo.name}</label>
      </div>
      <div className={styles.delete}>X</div>
    </div>
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
      <div className={styles.listItems}>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
