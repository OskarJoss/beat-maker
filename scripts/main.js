"use_strict";

const FPS = 60;
let assets = [];

let isPlaying = false;
let bpm = 140;
let selectedSoundIcon;

//instanses of classes
let player;
let metronome;
let soundIcons;

//maby change this to an array and fill it in setupColors
let red;
let green;
let blue;

//find nicer way of loading more assets later
const setupAssets = () => {
  assets = {
    sound1: { audio: sound1, name: "hihat" },
    sound2: { audio: sound2, name: "clap" },
    sound3: { audio: sound3, name: "boom" },
  };
};

const setupColors = () => {
  red = color(255, 0, 0);
  green = color(0, 255, 0);
  blue = color(0, 0, 255);
};

//maby this should be handled by a class instead
const setupSoundIcons = () => {
  soundIcons = [
    new SoundIcon(30, height - 30, 50, "sound1", red),
    new SoundIcon(85, height - 30, 50, "sound2", green),
    new SoundIcon(140, height - 30, 50, "sound3", blue),
  ];
};

function mousePressed() {
  soundIcons.forEach((soundIcon) => {
    soundIcon.clicked();
  });

  player.clicked();
}

function keyPressed() {
  if (keyCode === 32) {
    isPlaying = !isPlaying;
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255);
  frameRate(FPS);

  setupColors();
  setupSoundIcons();
  setupAssets();

  player = new Player();
  metronome = new Metronome();
}

function draw() {
  soundIcons.forEach((soundIcon) => {
    soundIcon.show();
  });

  player.show();

  if (isPlaying) {
    player.play();
    metronome.update();
  } else {
    player.reset();
    metronome.reset();
  }
}
