"use_strict";

class Player {
  constructor() {
    //temporary constructor for Track
    this.tracks = [new Track(200, 4), new Track(300, 16)];
  }

  show() {
    this.tracks.forEach((track) => {
      track.show();
    });
  }

  clicked() {
    this.tracks.forEach((track) => {
      track.clicked();
    });
  }

  shiftClicked() {
    this.tracks.forEach((track) => {
      track.shiftClicked();
    });
  }

  play() {
    this.tracks.forEach((track) => {
      track.play();
    });
  }

  reset() {
    this.tracks.forEach((track) => {
      track.reset();
    });
  }

  resize() {
    this.tracks.forEach((track) => {
      track.resize();
    });
  }
}
