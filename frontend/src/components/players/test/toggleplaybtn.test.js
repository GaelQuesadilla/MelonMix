import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { TogglePlayBtn } from "../toggleplaybtn.js";

test("renders TogglePlayBtn with correct play icon when music is not playing", () => {
  const mockSetMusic = jest.fn();
  render(<TogglePlayBtn play={false} setMusic={mockSetMusic} />);

  const playIcon = screen.getByTestId("player-play-icon");
  expect(playIcon).toBeInTheDocument();
});

test("renders TogglePlayBtn with correct pause icon when music is playing", () => {
  const mockSetMusic = jest.fn();
  render(<TogglePlayBtn play={true} setMusic={mockSetMusic} />);

  const pauseIcon = screen.getByTestId("player-pause-icon");
  expect(pauseIcon).toBeInTheDocument();
});

test("calls toggleMusicPlay when the play button is clicked", () => {
  const mockSetMusic = jest.fn();
  render(<TogglePlayBtn play={false} setMusic={mockSetMusic} />);

  const playBtn = screen.getByTestId("playerTogglePlayBtn");
  userEvent.click(playBtn);
  expect(mockSetMusic).toHaveBeenCalled();
});
