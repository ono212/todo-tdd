import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { useTodos } from "./useTodos";
import { TodoType } from "./types";

const Todo = ({ items }: { items?: TodoType[] }) => {
  const {
    displayTodos,
    aggregation,
    setCategory,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos(items);
  return (
    <div className="todo-container">
      <h2>todos</h2>
      <TodoInput onItemAdded={addTodo} />
      <div className="aggregation">
        <div>
          <label>
            전체 항목 :
            <button
              data-testid="todo-total"
              onClick={() => setCategory("total")}
            >
              {aggregation.total}
            </button>
          </label>
        </div>

        <div>
          <label>
            완료된 항목 :
            <button
              data-testid="todo-completed"
              onClick={() => setCategory("completed")}
            >
              {aggregation.completed}
            </button>
          </label>
        </div>

        <div>
          <label>
            완료 전 항목 :
            <button
              data-testid="todo-active"
              onClick={() => setCategory("active")}
            >
              {aggregation.active}
            </button>
          </label>
        </div>
      </div>
      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
      />
    </div>
  );
};

export { Todo };
