import { render, screen, waitFor } from "@testing-library/react";
import { Todo } from "./Todo";
import userEvent from "@testing-library/user-event";

describe("Todo앱", () => {
  it("제목이 보여야한다.", () => {
    render(<Todo />);

    expect(screen.getByText("todos")).toBeInTheDocument();
  });

  it("리스트에 todo아이템을 추가한다.", async () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");
    userEvent.type(input, "우유 사기");
    userEvent.type(input, "{enter}");

    await waitFor(() => {
      expect(screen.getByText("우유 사기")).toBeInTheDocument();
    });
  });

  it("todo항목을 클릭하면 완료 처리가 된다.", async () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");
    userEvent.type(input, "우유 사기");
    userEvent.type(input, "{enter}");

    const item = screen.getByText("우유 사기");
    userEvent.click(item);

    await waitFor(() => {
      expect(item).toHaveAttribute("data-completed", "true");
    });
  });
});
