"use_strict";

let sound1;
let sound2;
let sound3;

let testIcon;

function preload() {
  sound1 = loadSound("./../assets/sounds/hihat.wav");
  sound2 = loadSound("./../assets/sounds/clap.wav");
  sound3 = loadSound("./../assets/sounds/boom.wav");

  testIcon = loadImage("/assets/icons/007.png");
}
