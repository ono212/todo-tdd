import { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoType } from "./types";

export const TodoInput = ({
  onItemAdded,
}: {
  onItemAdded: (todo: TodoType) => void;
}) => {
  const [content, setContent] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const id = uuid();
      onItemAdded({ id, content, completed: false });
    }
  };

  return (
    <input
      className="todo-input"
      type="text"
      data-testid="todo-input"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="할 일을 입력해주세요🤓."
    />
  );
};
