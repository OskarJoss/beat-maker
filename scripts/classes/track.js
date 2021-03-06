"use_strict";

class Track {
  //numberOfBeats temporarily in constructor for testing
  constructor(offsetY, numberOfBeats) {
    this.height = 60;
    this.width = width * 0.8;
    this.offsetX = width * 0.1;
    this.offsetY = offsetY;
    this.numberOfBeats = numberOfBeats;
    this.beatWidth = this.width / this.numberOfBeats;
    this.beats = [];

    for (let i = 0; i < this.numberOfBeats; i++) {
      const posX = this.offsetX + this.beatWidth * i;
      const posY = this.offsetY;

      this.beats.push(new Beat(posX, posY, this.beatWidth, this.height));
    }
  }

  show() {
    this.beats.forEach((beat) => {
      beat.show();
    });
  }

  clicked() {
    this.beats.forEach((beat) => {
      beat.clicked();
    });
  }

  shiftClicked() {
    this.beats.forEach((beat) => {
      beat.shiftClicked();
    });
  }

  play() {
    this.beats.forEach((beat) => {
      beat.play();
    });
  }

  reset() {
    this.beats.forEach((beat) => {
      beat.reset();
    });
  }

  addBeat() {
    //sets number of beats++, adds a new Beat to this.beats, updates the width and x of each beat.
    //also run player.updateMetronome here after change
  }

  removeBeat() {
    //sets number of beats--, removes the last beat, updates the width and x of each beat.
    //also run player.updateMetronome here after change
  }

  resize() {
    this.width = width * 0.7;
    this.offsetX = width * 0.15;
    this.beatWidth = this.width / this.numberOfBeats;

    for (let i = 0; i < this.numberOfBeats; i++) {
      const beat = this.beats[i];
      const posX = this.offsetX + this.beatWidth * i;
      const posY = this.offsetY;

      beat.x = posX;
      beat.y = posY;
      beat.height = this.height;
      beat.width = this.beatWidth;
      beat.div.position(beat.x + 5, beat.y);
    }
  }
}
