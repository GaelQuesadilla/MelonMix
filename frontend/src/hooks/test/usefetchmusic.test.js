import { renderHook, act } from "@testing-library/react";
import { UseFetchMusic } from "../usefetchmusic.js"; // Ajusta la ruta a tu archivo

describe("UseFetchMusic", () => {
  it("should update searchFilters and searchParams correctly", () => {
    const { result } = renderHook(() => UseFetchMusic());

    act(() => {
      result.current.setSearchFilters({ author: "John", title: "Song" });
    });

    expect(result.current.searchFilters).toEqual({
      author: "John",
      title: "Song",
    });

    act(() => {
      result.current.setSearchParams({ initial_index: "1", max_results: "5" });
    });

    expect(result.current.searchParams).toEqual({
      initial_index: "1",
      max_results: "5",
    });
  });

  // Add more tests here as needed
});
