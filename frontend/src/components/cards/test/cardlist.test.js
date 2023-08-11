import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CardList } from "../cardlist.js"; // Ajusta la ruta a tu archivo

class mockIntersectionObserver {
  constructor() {
    this.observe = jest.fn();
    this.disconnect = jest.fn();
  }
}
window.IntersectionObserver = mockIntersectionObserver;
describe("CardList", () => {
  it("renders the component with search results", () => {
    const searchResults = [
      { id: 1, name: "Song 1", artist: "Artist 1", url: "url1" },
      { id: 2, name: "Song 2", artist: "Artist 2", url: "url2" },
    ];

    const { getByText, getByTestId } = render(
      <CardList searchResults={searchResults} music={{}} setMusic={() => {}} />
    );

    expect(getByText("Listen music")).toBeInTheDocument();

    const musicCards = getByTestId("card-list");
    expect(musicCards.children.length).toBe(searchResults.length);
  });

  it("handles click events correctly", () => {
    const mockSetMusic = jest.fn();
    const searchResults = [
      { id: 1, name: "Song 1", artist: "Artist 1", url: "url1" },
    ];
    const { getByText } = render(
      <CardList
        searchResults={searchResults}
        music={{}}
        setMusic={mockSetMusic}
      />
    );

    const musicCard = getByText(searchResults[0].name);
    fireEvent.click(musicCard);

    expect(mockSetMusic).toHaveBeenCalledWith({
      url: "url1",
      play: true,
      time: 0,
      name: "Song 1",
      artist: "Artist 1",
      duration: 0,
      id: 1,
    });
  });

  it("renders message when no results", () => {
    const { getByText } = render(
      <CardList searchResults={[]} music={{}} setMusic={() => {}} />
    );
    expect(getByText("Nothing found :c")).toBeInTheDocument();
  });
});
