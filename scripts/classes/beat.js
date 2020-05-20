"use_strict";

class Beat {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.soundIcons = [];
    this.playedThisLoop = false;
    this.div = createDiv("");
    this.div.position(x + 5, y);
    //test for displaying selectedSoundIcon on the beats
    this.div2 = createDiv("yo").parent(this.div);
  }

  show() {
    this.div.size(this.width - 10, this.height);
    if (
      metronome.x >= this.x &&
      metronome.x <= this.x + this.width &&
      isPlaying
    ) {
      this.div.class("beat-active-step");
    } else {
      this.div.class("beat-step");
    }
    stroke(255, 255, 255);
    strokeWeight(6);

    if (this.containsSelectedSoundIcon()) {
      this.div2.show();
    } else {
      this.div2.hide();
    }
  }

  clicked() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height &&
      selectedSoundIcon
    ) {
      if (this.containsSelectedSoundIcon()) {
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

  containsSelectedSoundIcon() {
    if (
      this.soundIcons.find(
        (soundIcon) => soundIcon.assetKey === selectedSoundIcon.assetKey
      )
    ) {
      return true;
    }

    return false;
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
