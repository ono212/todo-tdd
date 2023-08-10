import { TodoType } from "./types";

export const TodoList = ({ todos }: { todos: TodoType[] }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
    </>
  );
};
