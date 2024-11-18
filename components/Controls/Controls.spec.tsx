import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Controls from ".";
import { Cover } from "@/types";
import { formatOptions } from "@/utils/options";

describe("Controls", () => {
  const mockCover: Cover = {
    format: "hardcover",
    style: "gradient-1",
    title: "Test Title",
    subtitle: "Test Subtitle",
    author: "Test Author",
    blurb: "Test Blurb",
    verticalAlign: "center",
    horizontalAlign: "center",
    isFlipped: false,
  };

  const mockOnUpdateField = jest.fn();
  const mockOnFlip = jest.fn();
  const mockOnReset = jest.fn();

  const defaultProps = {
    cover: mockCover,
    onUpdateField: mockOnUpdateField,
    onFlip: mockOnFlip,
    onReset: mockOnReset,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders all form controls", () => {
    render(<Controls {...defaultProps} />);

    // Get format select
    expect(
      screen.getByRole("button", { name: /book format/i })
    ).toBeInTheDocument();

    // Get text inputs by their labels
    expect(screen.getByDisplayValue("Test Title")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Author")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Blurb")).toBeInTheDocument();

    // Get alignment controls
    expect(screen.getAllByRole("radiogroup")).toHaveLength(2);

    // Get action buttons
    expect(screen.getByRole("button", { name: /flip/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });

  test("calls onUpdateField when input values change", () => {
    render(<Controls {...defaultProps} />);

    const titleInput = screen.getByDisplayValue("Test Title");
    fireEvent.change(titleInput, { target: { value: "New Title" } });
    expect(mockOnUpdateField).toHaveBeenCalledWith("title", "New Title");

    const subtitleInput = screen.getByDisplayValue("Test Subtitle");
    fireEvent.change(subtitleInput, { target: { value: "New Subtitle" } });
    expect(mockOnUpdateField).toHaveBeenCalledWith("subtitle", "New Subtitle");

    const authorInput = screen.getByDisplayValue("Test Author");
    fireEvent.change(authorInput, { target: { value: "New Author" } });
    expect(mockOnUpdateField).toHaveBeenCalledWith("author", "New Author");

    const blurbInput = screen.getByDisplayValue("Test Blurb");
    fireEvent.change(blurbInput, { target: { value: "New Blurb" } });
    expect(mockOnUpdateField).toHaveBeenCalledWith("blurb", "New Blurb");
  });

  test("calls onUpdateField when format changes", async () => {
    render(<Controls {...defaultProps} />);

    const formatButton = screen.getByRole("button", { name: /book format/i });
    fireEvent.click(formatButton);

    const tradeOption = await screen.findByRole("option", {
      name: 'Trade Paperback 6" × 9"',
    });
    fireEvent.click(tradeOption);

    expect(mockOnUpdateField).toHaveBeenCalledWith("format", "trade");
  });

  test("calls onFlip when flip button is clicked", () => {
    render(<Controls {...defaultProps} />);

    const flipButton = screen.getByRole("button", { name: /flip/i });
    fireEvent.click(flipButton);
    expect(mockOnFlip).toHaveBeenCalled();
  });

  test("calls onReset when reset button is clicked", () => {
    render(<Controls {...defaultProps} />);

    const resetButton = screen.getByRole("button", { name: /reset/i });
    fireEvent.click(resetButton);
    expect(mockOnReset).toHaveBeenCalled();
  });

  test("shows alert when download button is clicked", () => {
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<Controls {...defaultProps} />);

    const downloadButton = screen.getByRole("button", { name: /save/i });
    fireEvent.click(downloadButton);
    expect(mockAlert).toHaveBeenCalledWith("Not quite implemented yet!");

    mockAlert.mockRestore();
  });

  test("selects correct style when style button is clicked", () => {
    render(<Controls {...defaultProps} />);

    const styleButtons = screen
      .getAllByRole("button")
      .filter((button) => button.className.includes("h-24"));

    fireEvent.click(styleButtons[0]);
    expect(mockOnUpdateField).toHaveBeenCalledWith("style", expect.any(String));
  });

  test("updates vertical alignment when radio buttons are clicked", () => {
    render(<Controls {...defaultProps} />);

    const radiogroups = screen.getAllByRole("radiogroup");
    const verticalAlignRadios = radiogroups[0].querySelectorAll(
      'input[type="radio"]'
    );

    fireEvent.click(verticalAlignRadios[0]);
    expect(mockOnUpdateField).toHaveBeenCalledWith("verticalAlign", "top");
  });

  test("updates horizontal alignment when radio buttons are clicked", () => {
    render(<Controls {...defaultProps} />);

    const radiogroups = screen.getAllByRole("radiogroup");
    const horizontalAlignRadios = radiogroups[1].querySelectorAll(
      'input[type="radio"]'
    );

    fireEvent.click(horizontalAlignRadios[0]);
    expect(mockOnUpdateField).toHaveBeenCalledWith("horizontalAlign", "left");
  });
});
