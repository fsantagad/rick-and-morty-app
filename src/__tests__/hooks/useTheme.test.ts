import { act, renderHook } from "@testing-library/react";
import { useTheme } from "../../hooks/useTheme";

describe("useTheme", () => {
  test("get current theme and change", async () => {
    const { result } = renderHook(() => useTheme());
    const [theme, themeToggler] = result.current;
    expect(theme).toBe('light');

    act(() => {
      themeToggler()
    })

    const [themeAfter] = result.current;
    expect(themeAfter).toBe('dark')
  });
});
