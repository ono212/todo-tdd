import { useState } from "react";
import { TodoType } from "./types";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onItemAdded = (todo: TodoType) => setTodos([...todos, todo]);

  const onToggleItem = (todo: TodoType) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const onDeleteItem = (todo: TodoType) => {
    setTodos(
      todos.filter((item) => {
        if (item.id === todo.id) {
          console.log("삭제!");
        }

        return item.id !== todo.id;
      })
    );
  };
  return (
    <div className="todo-container">
      <h2>todos</h2>
      <TodoInput onItemAdded={onItemAdded} />
      <TodoList
        todos={todos}
        onToggleItem={onToggleItem}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
};

export { Todo };
