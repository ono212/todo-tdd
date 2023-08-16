import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { useTodos } from "./useTodos";
import { TodoType } from "./types";

const Todo = ({ items }: { items?: TodoType[] }) => {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filterCompletedTodos,
    filterTotalTodos,
    filterActiveTodos,
  } = useTodos(items);
  return (
    <div className="todo-container">
      <h2>todos</h2>
      <TodoInput onItemAdded={addTodo} />
      <div className="aggregation">
        <button data-testid="todo-total" onClick={filterTotalTodos}>
          전체 항목
        </button>
        <button data-testid="todo-completed" onClick={filterCompletedTodos}>
          완료된 항목
        </button>
        <button data-testid="todo-active" onClick={filterActiveTodos}>
          완료 전 항목
        </button>
      </div>
      <TodoList
        todos={todos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
      />
    </div>
  );
};

export { Todo };
