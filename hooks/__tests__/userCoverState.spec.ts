import { renderHook, act } from "@testing-library/react";
import { useCoverState } from "../useCoverState";

describe("useCoverState", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("initializes with default cover state", () => {
    const { result } = renderHook(() => useCoverState());
    expect(result.current.cover.title).toBe("The Art of Storytelling");
    expect(result.current.isTransitioning).toBe(false);
  });

  test("updateField updates specific field", () => {
    const { result } = renderHook(() => useCoverState());
    act(() => {
      result.current.updateField("title", "New Title");
    });
    expect(result.current.cover.title).toBe("New Title");
  });

  test("handleFlip toggles isFlipped and manages transition", () => {
    const { result } = renderHook(() => useCoverState());

    act(() => {
      result.current.handleFlip();
    });

    expect(result.current.isTransitioning).toBe(true);
    expect(result.current.cover.isFlipped).toBe(true);

    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(result.current.isTransitioning).toBe(false);
  });

  test("handleReset restores initial state", () => {
    const { result } = renderHook(() => useCoverState());

    act(() => {
      result.current.updateField("title", "Changed Title");
      result.current.handleReset();
    });

    expect(result.current.cover).toEqual(
      expect.objectContaining({
        title: "The Art of Storytelling",
      })
    );
  });
});
