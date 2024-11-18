import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import BookCoverCreator from "../../page";

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: jest.fn() }),
}));

describe("BookCoverCreator Integration", () => {
  test("updating controls updates book cover", async () => {
    render(<BookCoverCreator />);

    const titleInput = screen.getByDisplayValue("The Art of Storytelling");
    fireEvent.change(titleInput, { target: { value: "New Title" } });

    expect(screen.getByText("New Title")).toBeInTheDocument();
  });

  test("flipping cover shows back content", () => {
    render(<BookCoverCreator />);

    const flipButton = screen.getByRole("button", { name: /flip/i });
    fireEvent.click(flipButton);

    expect(
      screen.getAllByText(/A compelling exploration/i)[0]
    ).toBeInTheDocument();
  });

  test("resetting controls restores default state", () => {
    render(<BookCoverCreator />);

    const titleInput = screen.getByDisplayValue("The Art of Storytelling");
    fireEvent.change(titleInput, { target: { value: "New Title" } });

    const resetButton = screen.getByRole("button", { name: /reset/i });
    fireEvent.click(resetButton);

    expect(screen.getByText("The Art of Storytelling")).toBeInTheDocument();
  });
});
