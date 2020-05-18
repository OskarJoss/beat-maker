"use_strict";

class Player {
  constructor() {
    //temporary constructor for Track
    this.tracks = [new Track(100, 4), new Track(200, 16)];
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
}
