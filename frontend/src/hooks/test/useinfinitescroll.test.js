import React from "react";
import { UseInfiniteScroll } from "../useinfinitescroll";

import { renderHook } from "@testing-library/react";

class mockIntersectionObserver {
  constructor(func) {
    this.observe = jest.fn();
    this.disconnect = jest.fn();
  }
}
window.IntersectionObserver = mockIntersectionObserver;
const searchResults = [{ id: 1 }, { id: 2 }];
const setSearchParams = jest.fn();
const hasMoreResultsRef = { current: true };
const lastElementRef = { current: <div>Last Element</div> };

describe("UseInfinityScroll Hook", () => {
  it("renders without errors", () => {
    const { result } = renderHook(() =>
      UseInfiniteScroll({
        searchResults,
        setSearchParams,
        hasMoreResultsRef,
        lastElementRef,
      })
    );
  });
  it("should call fetchMoreItems when intersection occurs and hasMoreResultsRef is true", () => {
    const observeMock = jest.fn();
    const unobserveMock = jest.fn();
    const disconnectMock = jest.fn();
    window.IntersectionObserver = jest.fn(function () {
      this.observe = observeMock;
      this.unobserve = unobserveMock;
      this.disconnect = disconnectMock;
    });

    const { result } = renderHook(() =>
      UseInfiniteScroll({
        searchResults,
        setSearchParams,
        hasMoreResultsRef,
        lastElementRef,
      })
    );

    const onIntersection = window.IntersectionObserver.mock.calls[0][0];
    const fakeEntry = { isIntersecting: true };
    onIntersection([fakeEntry]);

    expect(observeMock).toHaveBeenCalledWith(lastElementRef.current);
    expect(setSearchParams).toHaveBeenCalled();
  });
});
