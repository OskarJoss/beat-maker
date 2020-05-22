"use_strict";

class SoundIcon {
  constructor(x, y, size, assetKey, color) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.assetKey = assetKey;
    // this.div = createDiv("");
    // this.div.position(x, y);
    // this.div.class("sound-icon");
    this.color = color;
  }

  show() {
    // this.div.size(this.width, this.height);
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  clicked() {
    if (dist(this.x, this.y, mouseX, mouseY) <= this.size / 2) {
      selectedSoundIcon = {
        assetKey: this.assetKey,
        assetName: assets[this.assetKey].name,
        assetShortName: assets[this.assetKey].shortname,
        assetIcon: assets[this.assetKey].icon,
      };

      if (!isPlaying) {
        assets[this.assetKey].audio.play();
      }
    }
  }
}
