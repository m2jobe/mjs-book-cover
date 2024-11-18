import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookCover from ".";

describe("BookCover", () => {
  const defaultProps = {
    format: "hardcover",
    style: "bold",
    title: "Test Title",
    subtitle: "Test Subtitle",
    author: "Test Author",
    blurb: "Test Blurb",
    verticalAlign: "center",
    horizontalAlign: "center",
    isFlipped: false,
    isTransitioning: false,
  };

  test("renders cover with title, subtitle and author", () => {
    render(<BookCover {...defaultProps} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Test Author")).toBeInTheDocument();
  });

  test("renders back cover with blurb when flipped", () => {
    render(<BookCover {...defaultProps} isFlipped={true} />);

    expect(screen.getByText("Test Blurb")).toBeInTheDocument();
  });

  test("applies vertical alignment classes correctly", () => {
    const { container } = render(
      <BookCover {...defaultProps} verticalAlign="top" />
    );

    expect(container.querySelector(".justify-start")).toBeInTheDocument();
  });

  test("applies horizontal alignment classes correctly", () => {
    const { container } = render(
      <BookCover {...defaultProps} horizontalAlign="left" />
    );

    expect(container.querySelector(".items-start")).toBeInTheDocument();
  });

  test("applies transitioning scale when isTransitioning is true", () => {
    const { container } = render(
      <BookCover {...defaultProps} isTransitioning={true} />
    );

    expect(container.querySelector(".scale-95")).toBeInTheDocument();
  });

  test("applies flip transform when isFlipped is true", () => {
    const { container } = render(
      <BookCover {...defaultProps} isFlipped={true} />
    );

    expect(container.querySelector(".rotate-y-180")).toBeInTheDocument();
  });
});
