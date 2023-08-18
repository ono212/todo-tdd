import { AggregationType } from "./types";
import { Category } from "./Category";

export const Aggregation = ({
  aggregation,
  switchCategory,
}: {
  aggregation: AggregationType;
  switchCategory: (type: string) => void;
}) => {
  return (
    <div className="aggregation">
      <Category
        label="전체 항목 : "
        type="total"
        number={aggregation.total}
        switchCategory={switchCategory}
      />
      <Category
        label="완료된 항목 : "
        type="completed"
        number={aggregation.completed}
        switchCategory={switchCategory}
      />
      <Category
        label="완료 전 항목 :"
        type="active"
        number={aggregation.active}
        switchCategory={switchCategory}
      />
    </div>
  );
};
