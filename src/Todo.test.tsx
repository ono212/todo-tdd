import { render, screen, waitFor, within } from "@testing-library/react";
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

  it("버튼을 클릭하면 todo항목을 지운다.", async () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");
    userEvent.type(input, "우유 사기");
    userEvent.type(input, "{enter}");

    const item = screen.getByText("우유 사기");
    expect(item).toBeInTheDocument();

    const deleteButton = screen.getByTestId("delete-button");
    userEvent.click(deleteButton);
    expect(item).not.toBeInTheDocument();
  });

  it("todo항목의 리스트를 렌더링한다.", () => {
    const items = [
      {
        id: "1",
        content: "감바스 만들 재료 사기",
        completed: false,
      },
      {
        id: "2",
        content: "리액트 공부하기",
        completed: true,
      },
      {
        id: "3",
        content: "옷 정리하기",
        completed: false,
      },
    ];

    render(<Todo items={items} />);
    expect(screen.getByText("옷 정리하기")).toBeInTheDocument();
  });

  describe("집계 탭들", () => {
    const items = [
      {
        id: "1",
        content: "감바스 만들 재료 사기",
        completed: false,
      },
      {
        id: "2",
        content: "리액트 공부하기",
        completed: true,
      },
      {
        id: "3",
        content: "옷 정리하기",
        completed: false,
      },
    ];

    it("전체 항목 탭을 클릭하면 전체 항목들을 렌더링한다.", () => {
      render(<Todo items={items} />);
      const todoItems = screen.getAllByTestId("todo-item");
      expect(todoItems.length).toEqual(items.length);

      const completedTab = screen.getByTestId("todo-completed");
      userEvent.click(completedTab);

      expect(screen.getAllByTestId("todo-item").length).toEqual(1);
      expect(screen.getByText("리액트 공부하기")).toBeInTheDocument();

      const totalTab = screen.getByTestId("todo-total");
      userEvent.click(totalTab);

      expect(screen.getAllByTestId("todo-item").length).toEqual(3);
    });

    it("완료된 항목 탭을 클릭하면 완료된 항목들만 렌더링한다.", () => {
      render(<Todo items={items} />);
      const todoItems = screen.getAllByTestId("todo-item");
      expect(todoItems.length).toEqual(items.length);

      const completedTab = screen.getByTestId("todo-completed");
      userEvent.click(completedTab);

      expect(screen.getAllByTestId("todo-item").length).toEqual(1);
      expect(screen.getByText("리액트 공부하기")).toBeInTheDocument();
    });

    it("완료 전 항목 탭을 클릭하면 아직 완료되지 않은 항목들만 렌더링한다.", () => {
      render(<Todo items={items} />);
      const todoItems = screen.getAllByTestId("todo-item");
      expect(todoItems.length).toEqual(items.length);

      const activeTab = screen.getByTestId("todo-active");
      userEvent.click(activeTab);

      expect(screen.getAllByTestId("todo-item").length).toEqual(2);
    });

    it("각 탭 별로 집계 숫자를 보여준다.", () => {
      render(<Todo items={items} />);
      const todoItems = screen.getAllByTestId("todo-item");
      expect(todoItems.length).toEqual(items.length);

      const totalTab = screen.getByTestId("todo-total");
      userEvent.click(totalTab);

      const activeTab = screen.getByTestId("todo-active");
      userEvent.click(activeTab);

      const completedTab = screen.getByTestId("todo-completed");
      userEvent.click(completedTab);

      expect(within(totalTab).getByText("3")).toBeInTheDocument();
      expect(within(activeTab).getByText("2")).toBeInTheDocument();
      expect(within(completedTab).getByText("1")).toBeInTheDocument();
    });
  });

  describe("검색", () => {
    it("키워드로 검색할 수 있다.", () => {
      const items = [
        {
          id: "1",
          content: "감바스 만들 재료 주문하기",
          completed: false,
        },
        {
          id: "2",
          content: "리액트 공부하기",
          completed: true,
        },
        {
          id: "3",
          content: "옷 주문하기",
          completed: false,
        },
      ];

      render(<Todo items={items} />);

      const input = screen.getByTestId("search-input");
      userEvent.type(input, "주문");

      expect(screen.getAllByTestId("todo-item").length).toEqual(2);
    });
  });
});
