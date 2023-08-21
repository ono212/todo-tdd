import {
  ChangeEvent,
  KeyboardEvent as ReactKeyboardEvent,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import { TodoType } from "../types";
import { useControlAndKey } from "../hooks/useControlAndKey";

export const TodoInput = ({
  onItemAdded,
}: {
  onItemAdded: (todo: TodoType) => void;
}) => {
  const [content, setContent] = useState<string>("");

  const { inputRef } = useControlAndKey("i");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const id = uuid();
      onItemAdded({ id, content, completed: false });
      setContent("");
    }
  };

  return (
    <input
      ref={inputRef}
      className="todo-input"
      type="text"
      data-testid="todo-input"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="할 일을 입력해주세요🤓"
      value={content}
    />
  );
};
