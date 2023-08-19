import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { useTodos } from "./useTodos";
import { TodoType } from "./types";
import { Aggregation } from "./Aggregation";
import { SearchBox } from "./SearchBox";

const Todo = ({ items }: { items?: TodoType[] }) => {
  const {
    displayTodos,
    aggregation,
    switchCategory,
    addTodo,
    toggleTodo,
    deleteTodo,
    search,
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
      />
      <SearchBox performSearch={search} />
    </div>
  );
};

export { Todo };
