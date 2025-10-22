import { Config, createSoundPlayerContext } from "react-hook-sound";

type SoundKey = "click" | "win" | "lose";

const soundConfig: Config<SoundKey> = {
  sounds: {
    click: {
      src: ["/sounds/click.mp3"],
    },
    win: {
      src: ["/sounds/win.mp3"],
    },
    lose: {
      src: ["/sounds/lose.mp3"],
    },
  },
};

// Wrap your React component tree with <SoundPlayerProvider>
// and use `useSoundPlayer` to get the player instance anywhre in your app
export const { SoundPlayerProvider, useSoundPlayer } =
  createSoundPlayerContext(soundConfig);
