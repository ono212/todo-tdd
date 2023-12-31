import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { useTodos } from "../hooks/useTodos";
import { TodoType } from "../types";
import { Aggregation } from "./Aggregation";
import { SearchInput } from "./SearchInput";

const Todo = ({ items }: { items?: TodoType[] }) => {
  const {
    displayTodos,
    aggregation,
    switchCategory,
    addTodo,
    toggleTodo,
    deleteTodo,
    search,
    editTodo,
  } = useTodos(items);

  return (
    <div className="todo-container">
      <h1>할 일 목록🚩</h1>
      <TodoInput onItemAdded={addTodo} />
      <Aggregation aggregation={aggregation} switchCategory={switchCategory} />
      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
        onEditItem={editTodo}
      />
      <SearchInput performSearch={search} />
    </div>
  );
};

export { Todo };
