"use strict";

class BpmSlider {
  constructor() {
    this.slider = createSlider(10, 200, 140);
    this.slider.position(180, 80);
    this.slider.input(updateBPM);
  }

  show() {
    let displayBPM = createP();
    displayBPM.addClass("text");
    displayBPM.position(180, 5);
    displayBPM.html("bpm: " + this.slider.value());
  }
}
