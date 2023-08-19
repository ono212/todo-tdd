import { ChangeEvent } from "react";

export const SearchBox = ({
  performSearch,
}: {
  performSearch: (query: string) => void;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    performSearch(e.target.value);
  };

  return (
    <input
      className="todo-input"
      type="text"
      data-testid="search-input"
      onChange={handleChange}
      placeholder="검색할 키워드를 입력해주세요🔎."
    />
  );
};
