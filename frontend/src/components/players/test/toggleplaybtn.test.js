import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { TogglePlayBtn } from "../toggleplaybtn.js";

test("renders TogglePlayBtn with correct play icon when music is not playing", () => {
  const mockToggleMusicPlay = jest.fn();
  render(<TogglePlayBtn play={false} toggleMusicPlay={mockToggleMusicPlay} />);

  const playIcon = screen.getByTestId("player-play-icon");
  expect(playIcon).toBeInTheDocument();
});

test("renders TogglePlayBtn with correct pause icon when music is playing", () => {
  const mockToggleMusicPlay = jest.fn();
  render(<TogglePlayBtn play={true} toggleMusicPlay={mockToggleMusicPlay} />);

  const pauseIcon = screen.getByTestId("player-pause-icon");
  expect(pauseIcon).toBeInTheDocument();
});

test("calls toggleMusicPlay when the play button is clicked", () => {
  const mockToggleMusicPlay = jest.fn();
  render(<TogglePlayBtn play={false} toggleMusicPlay={mockToggleMusicPlay} />);

  const playBtn = screen.getByTestId("playerTogglePlayBtn");
  userEvent.click(playBtn);
  expect(mockToggleMusicPlay).toHaveBeenCalled();
});
