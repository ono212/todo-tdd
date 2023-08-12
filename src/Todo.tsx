import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { useTodos } from "./useTodos";

const Todo = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  return (
    <div className="todo-container">
      <h2>todos</h2>
      <TodoInput onItemAdded={addTodo} />
      <TodoList
        todos={todos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
      />
    </div>
  );
};

export { Todo };
