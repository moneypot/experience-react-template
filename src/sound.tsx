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

export const { SoundPlayerProvider, useSoundPlayer } =
  createSoundPlayerContext(soundConfig);
