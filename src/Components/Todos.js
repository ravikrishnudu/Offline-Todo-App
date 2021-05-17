import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Footer from "./Footer";
import styles from "./Todos.module.css";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("Todos");

    if (arr) {
      let todos = JSON.parse(arr);
      setTodos(todos);
    }
  }, []);

  const addTodo = (name) => {
    const tags = name.split("#");
    const newTodos = [
      {
        name: tags[0],
        tags: [tags[1], tags[2]],
        id: uuidv4(),
        isCompleted: false,
      },
      ...todos,
    ];
    setTodos(newTodos);
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  };
  const handleReset = () => {
    localStorage.clear();
    setTodos([]);
  };

  const handleCheck = (id) => {
    console.log(id);
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });
    setTodos(newArray);
  };

  const deleteTodo = (id) => {
    const filterArray = todos.filter((todo) => todo.id !== id);
    setTodos(filterArray);
  };

  const clearCompleted = () => {
    const filteredArray = todos.filter((todo) => todo.isCompleted !== true);
    console.log(todos);
    setTodos(filteredArray);
  };
  const incompleteCount = todos.filter(
    (todo) => todo.isCompleted === false
  ).length;

  return (
    <div className={styles.container}>
      <h1>Todo's</h1>
      <TodoForm addTodo={addTodo} handleReset={handleReset} />
      <div className={styles.listItems}>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            handleCheck={handleCheck}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        ))}
        <Footer
          clearCompleted={clearCompleted}
          incompleteCount={incompleteCount}
        />
      </div>
    </div>
  );
}

export default Todos;
