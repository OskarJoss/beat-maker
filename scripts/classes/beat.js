"use_strict";

class Beat {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.soundIcons = [];
    this.playedThisLoop = false;
  }

  show() {
    //if setupColors is changed to array, fill needs to be changed here
    fill(red);
    stroke(0);
    rect(this.x, this.y, this.width, this.height);
  }

  clicked() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height &&
      selectedSoundIcon
    ) {
      //check if selectedSoundIcon already has been added, in that case remove it.
      if (
        this.soundIcons.find(
          (soundIcon) => soundIcon.assetKey === selectedSoundIcon.assetKey
        )
      ) {
        this.removeSoundIcon(selectedSoundIcon.assetKey);
      } else {
        this.soundIcons.push(selectedSoundIcon);
      }
    }
  }

  shiftClicked() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      console.log(this.soundIcons);
    }
  }

  play() {
    if (
      metronome.x >= this.x &&
      metronome.x <= this.x + this.width &&
      !this.playedThisLoop
    ) {
      this.playedThisLoop = true;

      this.soundIcons.forEach((soundIcon) => {
        if (assets[soundIcon.assetKey].audio) {
          assets[soundIcon.assetKey].audio.play();
        }
      });
    }
  }

  removeSoundIcon(assetKey) {
    this.soundIcons = this.soundIcons.filter(
      (soundIcon) => soundIcon.assetKey !== assetKey
    );
  }

  reset() {
    this.playedThisLoop = false;
  }
}
