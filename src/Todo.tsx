import { useState } from "react";
import { TodoType } from "./types";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onItemAdded = (todo: TodoType) => setTodos([...todos, todo]);

  return (
    <div>
      <h2>todos</h2>
      <TodoInput onItemAdded={onItemAdded} />
      <TodoList todos={todos} />
    </div>
  );
};

export { Todo };
