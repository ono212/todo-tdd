import { useState } from "react";
import { TodoType } from "./types";

export const useTodos = (items: TodoType[] = []) => {
  const [todos, setTodos] = useState<TodoType[]>(items);
  const [displayTodos, setDisplayTodos] = useState<TodoType[]>(items);

  const addTodo = (todo: TodoType) => {
    setTodos([...todos, todo]);
    setDisplayTodos([...todos, todo]);
  };

  const toggleTodo = (todo: TodoType) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );

    setDisplayTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const deleteTodo = (todo: TodoType) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    setDisplayTodos(todos.filter((item) => item.id !== todo.id));
  };

  const filterCompletedTodos = () => {
    setDisplayTodos(todos.filter((todo) => todo.completed));
  };

  const filterTotalTodos = () => {
    setDisplayTodos(todos);
  };

  const filterActiveTodos = () => {
    setDisplayTodos(todos.filter((todo) => !todo.completed));
  };

  return {
    todos: displayTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filterCompletedTodos,
    filterTotalTodos,
    filterActiveTodos,
  };
};
