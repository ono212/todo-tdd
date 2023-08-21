import { ChangeEvent } from "react";
import { useControlAndKey } from "../hooks/useControlAndKey";

export const SearchInput = ({
  performSearch,
}: {
  performSearch: (query: string) => void;
}) => {
  const { inputRef } = useControlAndKey("u");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    performSearch(e.target.value);
  };

  return (
    <input
      ref={inputRef}
      className="todo-input"
      type="text"
      data-testid="search-input"
      onChange={handleChange}
      placeholder="검색할 키워드를 입력해주세요🔎"
    />
  );
};
