"use_strict";

class Metronome {
  constructor() {
    this.start = player.tracks[0].offsetX;
    this.end = this.start + player.tracks[0].width;
    this.x = this.start;
    this.getUpdateSpeed();
  }

  reset() {
    this.x = this.start;
  }

  update() {
    this.x += this.updateSpeed;
    if (this.x >= this.end) {
      player.reset();
      this.x = this.start;
    }
  }

  //this needs to be run whenever bpm or the number of beats on the first track i updated.
  getUpdateSpeed() {
    //count the first tracks beats as quarter notes.
    const timeSignature = player.tracks[0].beats.length;
    const bps = bpm / 60;
    const secondsPerLoop = timeSignature / bps;
    const updateSpeed = player.tracks[0].width / (secondsPerLoop * FPS);

    //set the updatespeed to 2 decimals, too many decimals seems to be cause of sound lagging.
    this.updateSpeed = Math.round(updateSpeed * 100) / 100;
  }

  resize() {
    this.start = player.tracks[0].offsetX;
    this.end = this.start + player.tracks[0].width;
  }
}
