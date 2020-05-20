"use_strict";

class Beat {
  constructor(x, y, width, height, id) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.soundIcons = [];
    this.playedThisLoop = false;
    this.div = createDiv("");
    this.div.position(x + 5, y);
  }

  show() {
    this.div.size(this.width - 10, this.height);
    if (
      metronome.x >= this.x &&
      metronome.x <= this.x + this.width &&
      isPlaying
    ) {
      // fill(255, 140, 105);
      this.div.class("beat-active-step");
    } else {
      // fill(236, 236, 236);
      this.div.class("beat-step");
    }
    //if setupColors is changed to array, fill needs to be changed here
    stroke(255, 255, 255);
    strokeWeight(6);
    // rect(this.x, this.y, this.width, this.height);
  }

  clicked() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height &&
      selectedSoundIcon
    ) {
      this.soundIcons.push(selectedSoundIcon);
    }
  }

  shiftClicked() {
    //for editing maby
  }

  play() {
    if (
      metronome.x >= this.x &&
      metronome.x <= this.x + this.width &&
      !this.playedThisLoop
    ) {
      this.playedThisLoop = true;
      this.soundIcons.forEach((soundIcon) => {
        assets[soundIcon.assetKey].audio.play();
      });
    }
  }

  reset() {
    this.playedThisLoop = false;
  }
}
