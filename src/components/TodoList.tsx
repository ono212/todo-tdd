import {
  useState,
  KeyboardEvent as ReactKeyboardEvent,
  ChangeEvent,
} from "react";
import { TodoType } from "../types";

export const TodoList = ({
  todos,
  onToggleItem,
  onDeleteItem,
  onEditItem,
}: {
  todos: TodoType[];
  onToggleItem: (todo: TodoType) => void;
  onDeleteItem: (todo: TodoType) => void;
  onEditItem: (todo: TodoType) => void;
}) => {
  const [editItem, setEditItem] = useState<TodoType | null>(null);
  const [editContent, setEditContent] = useState<string>("");

  const handleEditClick = (todo: TodoType) => {
    setEditItem(todo);
    setEditContent(todo.content);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && editItem) {
      onEditItem({ ...editItem, content: editContent });
      setEditItem(null);
      setEditContent("");
    }
  };

  return (
    <>
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id} data-testid="todo-item">
          {(editItem && editItem.id) === todo.id ? (
            <input
              data-testid="edit-input"
              value={editContent}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
          ) : (
            <>
              <span
                data-completed={todo.completed}
                onClick={() => onToggleItem(todo)}
              >
                {todo.content}
              </span>
              <div className="todo-buttons">
                <button
                  data-testid="delete-button"
                  onClick={() => onDeleteItem(todo)}
                >
                  삭제
                </button>
                <button
                  data-testid="edit-button"
                  onClick={() => {
                    handleEditClick(todo);
                  }}
                >
                  편집
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};
