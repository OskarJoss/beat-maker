"use_strict";

class SoundIcon {
  constructor(assetKey) {
    this.assetKey = assetKey;
    this.div = createDiv("");
    this.div.addClass("sound-icon");
    this.div.parent(soundIconsWrapper);
    this.div.mouseClicked(this.clicked);
  }

  clicked = () => {
    selectedSoundIcon = {
      assetKey: this.assetKey,
      assetName: assets[this.assetKey].name,
      assetShortName: assets[this.assetKey].shortname,
    };

    if (!isPlaying) {
      console.log(this);
      assets[this.assetKey].audio.play();
    }

    soundIcons.forEach((soundIcon) => {
      soundIcon.div.removeClass("active");
    });
    this.div.addClass("active");

    soundIconToolTip.html(assets[this.assetKey].name);
  };
}
