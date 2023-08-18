import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { useTodos } from "./useTodos";
import { TodoType } from "./types";
import { Aggregation } from "./Aggregation";

const Todo = ({ items }: { items?: TodoType[] }) => {
  const {
    displayTodos,
    aggregation,
    switchCategory,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos(items);
  return (
    <div className="todo-container">
      <h2>todos</h2>
      <TodoInput onItemAdded={addTodo} />

      <Aggregation aggregation={aggregation} switchCategory={switchCategory} />

      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
      />
    </div>
  );
};

export { Todo };
