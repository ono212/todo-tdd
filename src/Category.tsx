export const Category = ({
  label,
  type,
  number,
  switchCategory,
}: {
  label: string;
  type: string;
  number: number;
  switchCategory: (type: string) => void;
}) => {
  return (
    <div>
      <label>
        {label}
        <button
          data-testid={`todo-${type}`}
          onClick={() => switchCategory(type)}
        >
          {number}
        </button>
      </label>
    </div>
  );
};
