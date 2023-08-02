import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PlayerBottom } from "../playerbottom";

const mockMusic = {
  url: "https://example.com/music.mp3",
  play: false,
  time: 0,
  name: "Example Song",
  artist: "Example Artist",
  totalTime: 100,
};

const mockSetMusic = jest.fn();
const mockToggleMusicPlay = jest.fn();
const mockSetMusicTime = jest.fn();

test("renders PlayerBottom with correct music data", () => {
  render(
    <PlayerBottom
      music={mockMusic}
      setMusic={mockSetMusic}
      toggleMusicPlay={mockToggleMusicPlay}
      setMusicTime={mockSetMusicTime}
    />
  );

  const musicToggleBtn = screen.getByTestId("playerTogglePlayBtn");
  const musicRange = screen.getByTestId("playerSliderInput");
  const musicName = screen.getByText(/example song/i);
  const musicArtist = screen.getByText(/Example Artist/i);

  expect(musicToggleBtn).toBeInTheDocument();
  expect(musicRange).toBeInTheDocument();
  expect(musicName).toBeInTheDocument();
  expect(musicArtist).toBeInTheDocument();
});
