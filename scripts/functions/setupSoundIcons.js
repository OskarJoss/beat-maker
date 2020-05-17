"use_strict";

//maby this should be handled by a class instead, like a soundboard class holding all the sound icons
//maby find a better name for this class
const setupSoundIcons = () => {
  soundIcons = [
    new SoundIcon(30, height - 30, 50, "sound1", red),
    new SoundIcon(85, height - 30, 50, "sound2", green),
    new SoundIcon(140, height - 30, 50, "sound3", blue),
  ];
};
