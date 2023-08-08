import { renderHook, act } from "@testing-library/react";
import { UseMusic, useMusic } from "../usemusic.js";

describe("useMusic hook", () => {
  test("should update the time when the music is playing", () => {
    let fakeTime = 0;
    const howlerRef = {
      current: { duration: () => 180, seek: (e) => fakeTime },
    };
    jest.useFakeTimers();
    const { result } = renderHook(() => UseMusic(howlerRef));

    // Act
    act(() => {
      result.current.setMusic({
        url: "your_music_url.mp3",
        play: true,
        time: 0,
        name: "Your Music",
        artist: "Your Artist",
        duration: 180,
      });
    });

    act(() => {
      jest.advanceTimersByTime(500);
      fakeTime += 500;
    });

    expect(result.current.music.time).toBeGreaterThan(0);

    act(() => {
      result.current.setMusic((prev) => ({ ...prev, play: false }));
    });
  });
});
