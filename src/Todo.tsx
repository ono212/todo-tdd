import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { useTodos } from "./useTodos";
import { TodoType } from "./types";
import { Category } from "./Category";

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
        <Category
          label="전체 항목 : "
          type="total"
          number={aggregation.total}
          switchCategory={setCategory}
        />
        <Category
          label="완료된 항목 : "
          type="completed"
          number={aggregation.completed}
          switchCategory={setCategory}
        />
        <Category
          label="완료 전 항목 :"
          type="active"
          number={aggregation.active}
          switchCategory={setCategory}
        />
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
